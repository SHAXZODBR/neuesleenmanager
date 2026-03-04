import { NextResponse } from 'next/server';
import { evalConfig, decisionTestConfig, getRating } from '@/evalConfig';
import { locales } from '@/locales';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Resend } from 'resend';

// Initialize SDKs securely
const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null;
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const data = await request.json();
    const { employeeName, answers, lang, evalType } = data;
    const text = locales[lang];

    // 1. Calculate the score securely on the backend
    let totalScore = 0;
    let maxPossibleTotal = 0;
    const answeredStrings = [];

    evalConfig.forEach(section => {
      section.questions.forEach(q => {
        const selectedOptionIndex = answers[q.id];
        // Handle undefined, null, or out-of-bounds indices
        if (selectedOptionIndex !== undefined && selectedOptionIndex !== null) {
          const selectedOption = q.options[selectedOptionIndex];

          if (!selectedOption) {
            console.warn(`[BACKEND] Invalid option index ${selectedOptionIndex} for question ${q.id}`);
            return;
          }

          // Use weight for KPIs (s sections), or default weight 1 for decisions
          const weight = section.weight || 1;
          const maxPossibleScore = Math.max(...q.options.map(opt => opt.score));
          const scoreAchieved = selectedOption.score || 0;

          totalScore += (scoreAchieved * (weight / 100));
          maxPossibleTotal += (maxPossibleScore * (weight / 100));

          let statusEmoji = "❌"; // Failed/Lowest
          if (scoreAchieved === maxPossibleScore) {
            statusEmoji = "✅"; // Perfect
          } else if (scoreAchieved > 0) {
            statusEmoji = "⚠️"; // Partial
          }

          const optionText = (selectedOption.text ? selectedOption.text[lang] : selectedOption[lang]) || "N/A";
          answeredStrings.push("- " + (q.title[lang] || q.id) + ": " + optionText + " (" + statusEmoji + ")");
        }
      });
    });

    // Normalize the score to a 0-100 scale
    const finalScore = maxPossibleTotal > 0 ? Math.round((totalScore / maxPossibleTotal) * 100) : 0;

    const ratingId = getRating(finalScore);
    const ratingText = text.ratings ? text.ratings[ratingId] : ratingId;

    // 2. Generate Real AI Analysis using Google Gemini
    let aiAnalysis = "AI Analysis is unavailable because the GEMINI_API_KEY environment variable is missing.";

    if (genAI) {
      const promptLanguage = lang === 'uz' ? 'Uzbek' : 'Russian';
      try {
        const prompt = `You are an expert HR and Pharmaceutical Distribution Manager Appraiser.
Provide a highly detailed, professional analysis of the employee's performance in a "Unified Performance & Leadership Appraisal 2025".
This appraisal combines Hard KPIs (operational metrics) with Strategic Leadership Judgment (decision-making cases).

Reply ONLY in ${promptLanguage}.

Structure your response with the following sections (use clear text formatting, no markdown):
1. Executive Summary: Overview of overall performance (High-level).
2. Operational Excellence (KPIs): Analyze their performance in technical/regulatory metrics.
3. Leadership & Judgment: Analyze their strategic decision-making and ethical choices in the scenarios.
4. Key Strengths: Areas where they scored high (✅).
5. Growth Opportunities: Identify any low scores (❌ or ⚠️) and provide actionable steps.

Employee Name: ${employeeName}
Score: ${finalScore}/100
Rating: ${ratingText}

Detailed Results:
${answeredStrings.join("\n")}`;

        // The diagnostic curl showed access to these specific models
        const modelNames = ["gemini-2.0-flash", "gemini-pro-latest", "gemini-flash-latest"];
        let result = null;

        for (const modelName of modelNames) {
          try {
            console.log(`[BACKEND] Attempting AI with: ${modelName}`);
            const model = genAI.getGenerativeModel({ model: modelName });

            // Set a timeout to avoid hanging
            result = await model.generateContent(prompt);
            if (result) break;
          } catch (modelErr) {
            console.warn(`[BACKEND] Model ${modelName} failed:`, modelErr.message);
          }
        }

        if (result) {
          const response = await result.response;
          aiAnalysis = response.text() + "\n\n--- Status Summary ---\n" + answeredStrings.join("\n");
          console.log("[BACKEND] AI Analysis generated successfully.");
        } else {
          console.error("[BACKEND] All Gemini models failed (likely Quota/Rate Limit).");
          aiAnalysis = "AI Analysis is temporarily unavailable due to high demand (API Quota Limit). Your detailed results are provided below as a backup.\n\n" + answeredStrings.join("\n");
        }
      } catch (aiError) {
        console.error("[BACKEND] General AI Exception:", aiError.message);
        aiAnalysis = "AI Analysis is currently offline. Please review your performance in the 'Raw Data' section below.\n\n" + answeredStrings.join("\n");
      }
    }

    // 3. Send Email using Resend
    let emailStatus = "Email skipped (missing RESEND_API_KEY or ADMIN_EMAIL_ADDRESS)";

    if (resend && process.env.ADMIN_EMAIL_ADDRESS) {
      console.log(`[BACKEND] Attempting to send email to ${process.env.ADMIN_EMAIL_ADDRESS}...`);
      try {
        const emailResponse = await resend.emails.send({
          from: 'AppraisalApp <onboarding@resend.dev>', // Resend's free testing domain
          to: [process.env.ADMIN_EMAIL_ADDRESS],
          subject: `${evalType === 'decision' ? 'Decision Test' : 'KPI Appraisal'} Result: ${employeeName} - ${finalScore}/100`,
          html: `
            <h2>${evalType === 'decision' ? 'Manager Decision-Making Test' : 'Performance Appraisal'} Results</h2>
            <p><strong>Employee:</strong> ${employeeName}</p>
            <p><strong>Total Score:</strong> ${finalScore} / 100</p>
            <p><strong>Rating:</strong> ${ratingText}</p>
            <hr />
            <h3>AI Analysis & Summary</h3>
            <p>${aiAnalysis.replace(/\n/g, '<br />')}</p>
            <hr />
            <h3>Raw Data:</h3>
            <ul>
              ${answeredStrings.map(ans => `<li>${ans}</li>`).join('')}
            </ul>
          `
        });

        if (emailResponse.error) {
          console.error("[BACKEND] Resend Email Error Response:", emailResponse.error);
          emailStatus = `Error: ${emailResponse.error.message}`;
        } else {
          console.log("[BACKEND] Resend Email Success:", emailResponse.data);
          emailStatus = "Email sent successfully";
        }
      } catch (emailError) {
        console.error("[BACKEND] Resend Exception:", emailError);
        emailStatus = "Exception during email send.";
      }
    }

    console.log(`[BACKEND] Processed evaluation for ${employeeName}: Final Score ${finalScore}%. ${emailStatus}`);

    return NextResponse.json({
      success: true,
      score: finalScore,
      rating: ratingId,
      emailStatus
    });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process evaluation' }, { status: 500 });
  }
}

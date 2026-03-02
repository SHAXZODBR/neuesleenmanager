"use client";

import React, { useState } from 'react';
import EvaluationForm from '@/components/EvaluationForm';
import SuccessPage from '@/components/SuccessPage';
import { locales } from '@/locales';
import { evalConfig, decisionTestConfig } from '@/evalConfig';

export default function Home() {
  const [lang, setLang] = useState('uz');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evalType, setEvalType] = useState(null); // 'kpi' or 'decision'
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [randomizedConfig, setRandomizedConfig] = useState([]);

  const text = locales[lang];

  const handleStart = (type) => {
    setEvalType(type);
    if (type === 'decision') {
      // Shuffle the 100-question pool and take 30
      const shuffled = [...decisionTestConfig].sort(() => 0.5 - Math.random());
      setRandomizedConfig(shuffled.slice(0, 30));
    } else {
      setRandomizedConfig(evalConfig);
    }
    setIsEvaluating(true);
    setSubmissionSuccess(false);
  };

  const handleRestart = () => {
    setIsEvaluating(false);
    setEvalType(null);
    setSubmissionSuccess(false);
    setRandomizedConfig([]);
  };

  const handleComplete = async (employeeName, answers) => {
    try {
      // Build the payload
      const payload = {
        employeeName,
        answers,
        lang,
        evalType // Include evaluation type in the payload
      };

      // Call the backend API
      const res = await fetch('/api/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      console.log('Submission Result:', data);

      setIsEvaluating(false);
      setSubmissionSuccess(true);

    } catch (error) {
      console.error('Error submitting evaluation:', error);
      alert('Tizim xatoligi yuz berdi. Iltimos, qayta urinib ko\'ring. / Произошла системная ошибка. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <>
      <header className="app-wrapper" style={{ paddingBottom: 0 }}>
        <div className="header-top">
          <div>
            <h1 style={{ fontSize: '1.8rem', marginBottom: 0 }}>{text.appTitle}</h1>
            <p style={{ fontSize: '0.9rem' }}>{text.appSubtitle}</p>
          </div>
          <div className="lang-selector">
            <button
              className={`lang-btn ${lang === 'uz' ? 'active' : ''}`}
              onClick={() => setLang('uz')}
            >
              UZ
            </button>
            <span style={{ color: 'var(--glass-border)' }}>|</span>
            <button
              className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
              onClick={() => setLang('ru')}
            >
              RU
            </button>
          </div>
        </div>
      </header>

      <main>
        {!isEvaluating && !submissionSuccess && (
          <div className="app-wrapper fade-in" style={{ textAlign: 'center', marginTop: '4rem' }}>
            <div className="glass-container" style={{ display: 'inline-block', maxWidth: '800px', width: '100%' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                <span role="img" aria-label="chart">📊</span> {text.selectEvaluation}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div
                  className="glass-card mode-select-card"
                  onClick={() => handleStart('kpi')}
                  style={{ cursor: 'pointer', padding: '2rem', border: '1px solid var(--glass-border)', borderRadius: '15px' }}
                >
                  <h3 style={{ color: '#60a5fa', marginBottom: '1rem' }}>{text.kpiAppraisal}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Standard performance review based on operational KPIs.</p>
                  <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>{text.startBtn}</button>
                </div>

                <div
                  className="glass-card mode-select-card"
                  onClick={() => handleStart('decision')}
                  style={{ cursor: 'pointer', padding: '2rem', border: '1px solid var(--glass-border)', borderRadius: '15px' }}
                >
                  <h3 style={{ color: '#34d399', marginBottom: '1rem' }}>{text.decisionTest}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Advanced decision-making and IQ test for pharmaceutical managers.</p>
                  <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', backgroundColor: '#059669' }}>{text.startBtn}</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isEvaluating && (
          <EvaluationForm
            lang={lang}
            config={randomizedConfig}
            onComplete={handleComplete}
          />
        )}

        {submissionSuccess && (
          <SuccessPage
            lang={lang}
            onRestart={handleRestart}
          />
        )}
      </main>
    </>
  );
}

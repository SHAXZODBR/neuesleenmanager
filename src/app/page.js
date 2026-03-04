"use client";

import React, { useState } from 'react';
import EvaluationForm from '@/components/EvaluationForm';
import SuccessPage from '@/components/SuccessPage';
import { locales } from '@/locales';
import { evalConfig, decisionTestConfig } from '@/evalConfig';

export default function Home() {
  const [lang, setLang] = useState('uz');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [randomizedConfig, setRandomizedConfig] = useState([]);
  const text = locales[lang];

  const handleStart = () => {
    setRandomizedConfig(evalConfig);
    setIsEvaluating(true);
    setSubmissionSuccess(false);
  };

  const handleRestart = () => {
    setIsEvaluating(false);
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
        evalType: 'unified' // Now unified
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
                <span role="img" aria-label="chart">📊</span> {text.appTitle}
              </h2>
              <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
                Performance metrics and strategic decision-making scenarios combined for a comprehensive appraisal.
              </p>
              <button
                className="btn btn-primary"
                style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}
                onClick={handleStart}
              >
                {text.startBtn}
              </button>
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

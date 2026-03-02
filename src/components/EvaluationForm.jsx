"use client";

import React, { useState } from 'react';
import { locales } from '@/locales';
import { evalConfig } from '@/evalConfig';

export default function EvaluationForm({ lang, config, onComplete }) {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(-1);
    const [employeeName, setEmployeeName] = useState('');
    const [answers, setAnswers] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const text = locales[lang];

    const handleOptionSelect = (questionId, optionIndex) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    };

    const isCurrentSectionComplete = () => {
        if (currentSectionIndex === -1) return employeeName.trim().length > 0;
        const currentSection = config[currentSectionIndex];
        return currentSection.questions.every(q => answers[q.id] !== undefined);
    };

    const goNext = async () => {
        if (isCurrentSectionComplete()) {
            if (currentSectionIndex < config.length - 1) {
                setCurrentSectionIndex(prev => prev + 1);
            } else {
                setIsSubmitting(true);
                // Simulate an API call delay here for UX before moving to success page
                await new Promise(resolve => setTimeout(resolve, 800));
                await onComplete(employeeName, answers);
                setIsSubmitting(false);
            }
        }
    };

    const goBack = () => {
        if (currentSectionIndex > -1) {
            setCurrentSectionIndex(prev => prev - 1);
        }
    };

    const totalSteps = config.length + 1;
    const progressPercent = ((currentSectionIndex + 1) / totalSteps) * 100;

    return (
        <div className="fade-in app-wrapper">
            <div className="glass-container">

                {/* Progress Bar */}
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
                </div>

                {currentSectionIndex === -1 ? (
                    // Registration Step
                    <div className="fade-in">
                        <h2>{text.employeeDetails}</h2>
                        <div style={{ marginBottom: '2rem' }}>
                            <label>{text.employeeName}</label>
                            <input
                                type="text"
                                value={employeeName}
                                onChange={e => setEmployeeName(e.target.value)}
                                placeholder="Ivanov Ivan / Eshmatov Toshmat"
                            />
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <button
                                className="btn btn-primary"
                                onClick={goNext}
                                disabled={!isCurrentSectionComplete()}
                            >
                                {text.next}
                            </button>
                        </div>
                    </div>
                ) : (
                    // Questions Step
                    <div className="fade-in" key={currentSectionIndex}>
                        <h2>{text.sections[config[currentSectionIndex].sectionId]}</h2>

                        {config[currentSectionIndex].questions.map((q) => (
                            <div key={q.id} style={{ marginBottom: '2.5rem' }}>
                                <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '500' }}>{q.title[lang]}</p>
                                <div className="options-group">
                                    {q.options.map((opt, idx) => {
                                        const isSelected = answers[q.id] === idx;
                                        return (
                                            <label
                                                key={idx}
                                                className={`option-label ${isSelected ? 'selected' : ''}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name={q.id}
                                                    checked={isSelected}
                                                    onChange={() => handleOptionSelect(q.id, idx)}
                                                />
                                                <span>{(opt.text ? opt.text[lang] : opt[lang]) || '...'}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                            <button className="btn" onClick={goBack} disabled={isSubmitting}>
                                {text.back || 'Back'}
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={goNext}
                                disabled={!isCurrentSectionComplete() || isSubmitting}
                            >
                                {isSubmitting ? 'Loading...' : (currentSectionIndex === config.length - 1 ? text.submit : text.next)}
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

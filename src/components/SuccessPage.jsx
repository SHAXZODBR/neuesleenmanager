import React from 'react';
import { locales } from '@/locales';

export default function SuccessPage({ lang, onRestart }) {
    const text = locales[lang];
    return (
        <div className="fade-in app-wrapper" style={{ textAlign: 'center', marginTop: '4rem' }}>
            <div className="glass-container" style={{ display: 'inline-block', maxWidth: '600px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--success)' }}>
                    ✅ {text.successMessage}
                </h2>
                <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                    {text.successSubmessage}
                </p>
                <button className="btn btn-primary" onClick={onRestart} style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
                    {text.returnHome || 'Return to Home'}
                </button>
            </div>
        </div>
    );
}

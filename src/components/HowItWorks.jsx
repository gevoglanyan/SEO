import React from 'react';

const styles = {
  section: { padding: '100px 0', borderTop: '1px solid #1a1a1a' },
  label: { textAlign: 'center', marginBottom: '8px' },
  heading: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800,
    fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em',
    color: '#f0f0f0', textAlign: 'center', marginBottom: '72px',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px',
    background: '#1e1e1e', border: '1px solid #1e1e1e', borderRadius: '12px',
    overflow: 'hidden',
  },
  card: { background: '#0f0f0f', padding: '40px 36px' },
  num: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '13px',
    color: '#e8ff47', letterSpacing: '0.06em', marginBottom: '24px',
    display: 'block',
  },
  cardTitle: {
    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '24px',
    color: '#f0f0f0', marginBottom: '16px', letterSpacing: '-0.01em',
  },
  cardText: { fontSize: '15px', color: '#666', lineHeight: 1.7 },
};

const steps = [
  {
    num: '01',
    title: 'Subscribe',
    text: 'Choose your plan and get instant access to your client portal. No contracts, cancel anytime.',
  },
  {
    num: '02',
    title: 'Request',
    text: 'Submit as many requests as you want. Websites, SEO tasks, automations — whatever you need.',
  },
  {
    num: '03',
    title: 'Receive',
    text: 'Get your work delivered in 24–72 hours on average. Unlimited revisions until you\'re happy.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={styles.section}>
      <div className="container">
        <div style={styles.label}>
          <span className="section-label">How it works</span>
        </div>
        <h2 style={styles.heading}>Simple as 1, 2, 3</h2>
        <div style={styles.grid} className="hiw-grid">
          {steps.map((s, i) => (
            <div key={i} style={styles.card}>
              <span style={styles.num}>{s.num}</span>
              <div style={styles.cardTitle}>{s.title}</div>
              <p style={styles.cardText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

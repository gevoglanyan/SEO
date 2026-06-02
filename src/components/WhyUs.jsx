import React from 'react';

const styles = {
  section: { padding: '100px 0', borderTop: '1px solid #1a1a1a' },
  head: { marginBottom: '64px' },
  heading: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800,
    fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em',
    color: '#f0f0f0', marginTop: '12px',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px',
    background: '#1a1a1a', border: '1px solid #1a1a1a', borderRadius: '12px',
    overflow: 'hidden',
  },
  card: {
    background: '#0a0a0a', padding: '36px 32px',
    transition: 'background 0.2s',
  },
  icon: {
    width: '36px', height: '36px', borderRadius: '8px',
    background: 'rgba(232,255,71,0.08)', border: '1px solid rgba(232,255,71,0.15)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: '20px', fontSize: '16px',
  },
  cardTitle: {
    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '17px',
    color: '#f0f0f0', marginBottom: '10px',
  },
  cardText: { fontSize: '14px', color: '#666', lineHeight: 1.7 },
};

const features = [
  { icon: '⚡', title: 'Lightning Fast', text: 'Most requests completed in 24–72 hours. No more waiting weeks for simple updates.' },
  { icon: '💳', title: 'Fixed Monthly Rate', text: 'No surprises. No hourly billing. One flat price every month for unlimited requests.' },
  { icon: '⏸', title: 'Pause Anytime', text: 'Busy month? Pause your subscription and pick back up when you\'re ready. No penalties.' },
  { icon: '🧩', title: 'All-in-One', text: 'Websites, SEO, and automation under one roof. No more managing multiple vendors.' },
  { icon: '🤝', title: 'Personal Service', text: 'Work directly with our team. No handoffs, no miscommunication. Just clear, fast execution.' },
  { icon: '🔒', title: 'You Own Everything', text: 'Every website, every asset is 100% yours. Transfer ownership anytime at no extra cost.' },
];

export default function WhyUs() {
  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.head}>
          <span className="section-label">Why Onyx Interactive</span>
          <h2 style={styles.heading}>Everything you need,<br />nothing you don't</h2>
        </div>
        <div style={styles.grid} className="features-grid">
          {features.map((f, i) => (
            <div key={i} style={styles.card}
              onMouseEnter={e => e.currentTarget.style.background = '#0e0e0e'}
              onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}>
              <div style={styles.icon}>{f.icon}</div>
              <div style={styles.cardTitle}>{f.title}</div>
              <p style={styles.cardText}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

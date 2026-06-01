import React from 'react';

const styles = {
  section: { padding: '100px 0', borderTop: '1px solid #1a1a1a' },
  inner: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' },
  left: {},
  heading: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800,
    fontSize: 'clamp(28px, 3.5vw, 46px)', letterSpacing: '-0.02em',
    color: '#f0f0f0', marginBottom: '48px',
  },
  steps: { display: 'flex', flexDirection: 'column', gap: '0' },
  step: {
    display: 'flex', gap: '24px', paddingBottom: '40px', position: 'relative',
  },
  stepLine: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
  },
  dot: {
    width: '10px', height: '10px', borderRadius: '50%',
    background: '#e8ff47', flexShrink: 0, marginTop: '4px',
  },
  line: { width: '1px', flex: 1, background: '#222', marginTop: '8px' },
  stepContent: {},
  stepTitle: {
    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px',
    color: '#f0f0f0', marginBottom: '8px',
  },
  stepText: { fontSize: '14px', color: '#666', lineHeight: 1.7 },
  right: {},
  statsBox: {
    background: '#0f0f0f', border: '1px solid #1e1e1e',
    borderRadius: '12px', overflow: 'hidden',
  },
  statRow: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '22px 28px', borderBottom: '1px solid #1a1a1a',
  },
  statLabel: { fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#666' },
  statValue: {
    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '15px', color: '#f0f0f0',
  },
  statValueAccent: {
    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '15px', color: '#e8ff47',
  },
};

const steps = [
  { title: 'Subscribe', text: 'Sign up in minutes. No contracts, cancel anytime.' },
  { title: 'Request', text: 'Submit requests through your portal. As many as you need.' },
  { title: 'We Deliver', text: 'Most work completed in 24–72 hours. Unlimited revisions.' },
  { title: 'Repeat', text: 'Approve and submit your next request. The cycle continues.' },
];

const stats = [
  { label: 'Active requests at a time', value: '2', accent: true },
  { label: 'Average turnaround', value: '24–72h', accent: false },
  { label: 'Revisions included', value: '∞', accent: true },
];

export default function Workflow() {
  return (
    <section id="workflow" style={styles.section}>
      <div className="container">
        <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>
          Your Journey
        </span>
        <div style={styles.inner} className="workflow-inner">
          <div style={styles.left}>
            <h2 style={styles.heading}>From subscribe<br />to delivered</h2>
            <div style={styles.steps}>
              {steps.map((s, i) => (
                <div key={i} style={styles.step}>
                  <div style={styles.stepLine}>
                    <div style={styles.dot}></div>
                    {i < steps.length - 1 && <div style={styles.line}></div>}
                  </div>
                  <div style={styles.stepContent}>
                    <div style={styles.stepTitle}>{s.title}</div>
                    <p style={styles.stepText}>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={styles.right}>
            <div style={styles.statsBox}>
              {stats.map((s, i) => (
                <div key={i} style={styles.statRow}>
                  <span style={styles.statLabel}>{s.label}</span>
                  <span style={s.accent ? styles.statValueAccent : styles.statValue}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .workflow-inner { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

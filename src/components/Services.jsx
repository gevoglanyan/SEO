import React from 'react';

const styles = {
  section: { padding: '100px 0', borderTop: '1px solid #1a1a1a' },
  head: { marginBottom: '64px' },
  heading: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800,
    fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.02em',
    color: '#f0f0f0', marginTop: '12px',
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
  card: {
    background: '#0f0f0f', border: '1px solid #1e1e1e',
    borderRadius: '12px', padding: '40px 36px',
    transition: 'border-color 0.2s',
  },
  cardAccent: {
    height: '3px', width: '32px', background: '#e8ff47',
    borderRadius: '2px', marginBottom: '28px',
  },
  cardTitle: {
    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '20px',
    color: '#f0f0f0', marginBottom: '14px',
  },
  cardText: { fontSize: '14px', color: '#666', lineHeight: 1.7, marginBottom: '28px' },
  list: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' },
  listItem: {
    display: 'flex', alignItems: 'center', gap: '10px',
    fontSize: '14px', color: '#888',
  },
  listDot: {
    width: '5px', height: '5px', borderRadius: '50%',
    background: '#e8ff47', flexShrink: 0,
  },
};

const services = [
  {
    title: 'Website Development',
    text: 'High-converting websites built fast. Responsive, and designed to convert visitors into leads.',
    items: ['Landing pages', 'Service pages', 'Full website builds'],
  },
  {
    title: 'SEO & Search Visibility',
    text: 'Get found on Google. Technical SEO, on-page optimization, and content strategy that drives organic traffic.',
    items: ['Keyword research', 'On-page optimization', 'Technical SEO'],
  },
  {
    title: 'Automation & Lead Capture',
    text: "Never miss a lead. Forms, booking systems, and automated follow-ups that work while you sleep.",
    items: ['Lead capture forms', 'Booking integrations', 'Email automation'],
  },
];

export default function Services() {
  return (
    <section id="services" style={styles.section}>
      <div className="container">
        <div style={styles.head}>
          <span className="section-label">What's included</span>
          <h2 style={styles.heading}>Three pillars of<br />digital growth</h2>
        </div>
        <div style={styles.grid} className="services-grid">
          {services.map((s, i) => (
            <div key={i} style={styles.card}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#2a2a2a'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1e1e1e'}>
              <div style={styles.cardAccent}></div>
              <div style={styles.cardTitle}>{s.title}</div>
              <p style={styles.cardText}>{s.text}</p>
              <ul style={styles.list}>
                {s.items.map((item, j) => (
                  <li key={j} style={styles.listItem}>
                    <span style={styles.listDot}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

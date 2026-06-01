import React from 'react';

const styles = {
  cta: {
    padding: '100px 0', borderTop: '1px solid #1a1a1a',
  },
  ctaInner: {
    background: '#0f0f0f', border: '1px solid #1e1e1e', borderRadius: '16px',
    padding: '80px 48px', textAlign: 'center',
    position: 'relative', overflow: 'hidden',
  },
  glow: {
    position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
    width: '400px', height: '300px',
    background: 'radial-gradient(ellipse, rgba(232,255,71,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  ctaTitle: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800,
    fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '-0.02em',
    color: '#f0f0f0', marginBottom: '16px', position: 'relative',
  },
  ctaText: {
    fontSize: '16px', color: '#666', maxWidth: '440px',
    margin: '0 auto 36px', lineHeight: 1.7, position: 'relative',
  },
  footer: {
    borderTop: '1px solid #1a1a1a', padding: '40px 0',
  },
  footerInner: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    flexWrap: 'wrap', gap: '24px',
  },
  logo: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '16px', color: '#f0f0f0',
  },
  logoAccent: { color: '#e8ff47' },
  footerLinks: {
    display: 'flex', gap: '24px', flexWrap: 'wrap',
    listStyle: 'none', alignItems: 'center',
  },
  footerLink: { fontSize: '13px', color: '#555', cursor: 'pointer', transition: 'color 0.2s' },
  copy: { fontSize: '13px', color: '#333' },
};

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <>
      <section style={styles.cta}>
        <div className="container">
          <div style={styles.ctaInner}>
            <div style={styles.glow}></div>
            <h2 style={styles.ctaTitle}>Ready to grow your digital presence?</h2>
            <p style={styles.ctaText}>Stop piecing together agencies and freelancers. Get everything you need under one roof.</p>
            <button className="btn-primary" onClick={() => scrollTo('pricing')}>
              Get started today →
            </button>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div className="container">
          <div style={styles.footerInner}>
            <div style={styles.logo}>
              Onyx <span style={styles.logoAccent}>Interactive</span> Studios
            </div>
            <ul style={styles.footerLinks}>
              {['Terms of Service', 'Privacy Policy', 'Ownership Agreement'].map((l, i) => (
                <li key={i}>
                  <span style={styles.footerLink}
                    onMouseEnter={e => e.target.style.color = '#888'}
                    onMouseLeave={e => e.target.style.color = '#555'}>
                    {l}
                  </span>
                </li>
              ))}
            </ul>
            <br />
            <span style={styles.copy}>© Onyx Interactive Studios. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

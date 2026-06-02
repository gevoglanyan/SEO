import React from 'react';

const styles = {
  section: {
    paddingTop: '160px', paddingBottom: '100px', position: 'relative', overflow: 'hidden',
  },
  gridBg: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
    backgroundSize: '60px 60px',
    maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
    WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
  },
  glow: {
    position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)',
    width: '700px', height: '500px',
    background: 'radial-gradient(ellipse, rgba(232,255,71,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  inner: { position: 'relative', zIndex: 1, textAlign: 'center' },
  pill: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    background: 'rgba(232,255,71,0.08)', border: '1px solid rgba(232,255,71,0.2)',
    color: '#e8ff47', fontFamily: 'Syne, sans-serif', fontWeight: 600,
    fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
    padding: '6px 16px', borderRadius: '100px', marginBottom: '36px',
  },
  dot: { width: '6px', height: '6px', borderRadius: '50%', background: '#e8ff47' },
  h1: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800,
    fontSize: 'clamp(44px, 7vw, 88px)', lineHeight: 1.05,
    letterSpacing: '-0.03em', color: '#f0f0f0', marginBottom: '8px',
  },
  h1line2: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800,
    fontSize: 'clamp(44px, 7vw, 88px)', lineHeight: 1.05,
    letterSpacing: '-0.03em', color: '#e8ff47', marginBottom: '32px',
    display: 'block',
  },
  sub: {
    fontSize: '17px', color: '#777', maxWidth: '540px', margin: '0 auto 48px',
    lineHeight: 1.7,
  },
  btns: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '16px', flexWrap: 'wrap', marginBottom: '72px',
  },
  note: {
    fontSize: '13px', color: '#555', letterSpacing: '0.02em',
    marginBottom: '72px',
  },
  statsRow: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1px', background: '#1e1e1e',
    border: '1px solid #1e1e1e', borderRadius: '12px', overflow: 'hidden',
    maxWidth: '1000px', margin: '0 auto',
  },
  stat: {
    background: '#0f0f0f', padding: '24px 20px', textAlign: 'center',
  },
  statValue: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '22px',
    color: '#f0f0f0', letterSpacing: '-0.02em', marginBottom: '4px',
  },
  statLabel: { fontSize: '12px', color: '#555', lineHeight: 1.4 },
};

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={styles.section}>
      <div style={styles.glow}></div>
      <div className="container" style={styles.inner}>
        <div className="fade-up fade-up-1">
          <div style={styles.pill}>
            <span style={styles.dot}></span>
            Pause or cancel anytime
          </div>
        </div>
        <div className="fade-up fade-up-2">
          <h1 style={styles.h1}>Web <br /> Design & SEO</h1>
          <br />
          <span style={styles.h1line2}>One Subscription.</span>
        </div>
        <div className="fade-up fade-up-3">
          <p style={styles.sub}>
            Web Design and SEO for professional service companies. One subscription. No contracts.
            Stop juggling agencies and freelancers. Get unlimited web development, search optimization,
            and automation — all for one flat monthly fee.
          </p>
        </div>
        <div className="fade-up fade-up-4" style={styles.btns}>
          <button className="btn-primary" onClick={() => scrollTo('pricing')}>
            See pricing →
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('how-it-works')}>
            Learn More
          </button>
        </div>
        <div className="fade-up fade-up-4" style={styles.note}>
          Join today and get your first deliverable within 48 hours.
        </div>
        <div className="fade-up fade-up-5" style={styles.statsRow}>
          {[
            { value: '24 – 72h', label: 'Average Turnaround' },
            { value: 'Unlimited', label: 'Requests & Revisions' },
            { value: '100%', label: 'Ownership is Yours' },
            { value: 'Negotiable', label: 'Pause or Cancel Anytime' },
          ].map((s, i) => (
            <div key={i} style={styles.stat}>
              <div style={styles.statValue}>{s.value}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

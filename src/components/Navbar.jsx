import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    borderBottom: '1px solid transparent',
    transition: 'background 0.3s, border-color 0.3s',
  },
  navScrolled: {
    background: 'rgba(10,10,10,0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #1e1e1e',
  },
  inner: {
    maxWidth: '1100px', margin: '0 auto', padding: '0 24px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: '64px',
  },
  logo: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '18px',
    color: '#f0f0f0', letterSpacing: '-0.02em',
  },
  logoAccent: { color: '#e8ff47' },
  links: {
    display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none',
  },
  link: {
    fontFamily: 'Syne, sans-serif', fontWeight: 500, fontSize: '13px',
    color: '#888', letterSpacing: '0.04em', textTransform: 'uppercase',
    cursor: 'pointer', transition: 'color 0.2s',
  },
  cta: {
    background: '#e8ff47', color: '#0a0a0a', fontFamily: 'Syne, sans-serif',
    fontWeight: 700, fontSize: '12px', padding: '9px 20px', borderRadius: '6px',
    border: 'none', cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase',
    transition: 'background 0.2s',
  },
  hamburger: {
    display: 'none', flexDirection: 'column', gap: '5px', background: 'none',
    border: 'none', cursor: 'pointer', padding: '4px',
  },
  bar: { width: '22px', height: '2px', background: '#f0f0f0', borderRadius: '2px', display: 'block' },
  mobileMenu: {
    background: '#111', borderTop: '1px solid #222',
    padding: '16px 24px 24px',
  },
  mobileLink: {
    display: 'block', fontFamily: 'Syne, sans-serif', fontWeight: 500,
    fontSize: '14px', color: '#888', padding: '12px 0',
    borderBottom: '1px solid #1a1a1a', textTransform: 'uppercase',
    letterSpacing: '0.04em', cursor: 'pointer',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'How it Works', id: 'how-it-works' },
    { label: 'Workflow', id: 'workflow' },
    { label: 'Services', id: 'services' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <div style={styles.inner}>
        <div style={styles.logo}>
          Onyx <span style={styles.logoAccent}>Interactive</span>
        </div>
        <nav>
          <ul style={styles.links} className="desktop-nav">
            {navLinks.map(l => (
              <li key={l.id}>
                <span style={styles.link} onClick={() => scrollTo(l.id)}
                  onMouseEnter={e => e.target.style.color = '#f0f0f0'}
                  onMouseLeave={e => e.target.style.color = '#888'}>
                  {l.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
        <button style={styles.cta} className="desktop-cta"
          onClick={() => scrollTo('pricing')}
          onMouseEnter={e => e.target.style.background = '#d4eb2e'}
          onMouseLeave={e => e.target.style.background = '#e8ff47'}>
          Get Started
        </button>
        <button style={{ ...styles.hamburger, display: 'none' }} className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}>
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
          <span style={styles.bar}></span>
        </button>
      </div>
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map(l => (
            <span key={l.id} style={styles.mobileLink} onClick={() => scrollTo(l.id)}>
              {l.label}
            </span>
          ))}
          <button style={{ ...styles.cta, marginTop: '16px', width: '100%', padding: '14px' }}
            onClick={() => scrollTo('pricing')}>
            Get Started
          </button>
        </div>
      )}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

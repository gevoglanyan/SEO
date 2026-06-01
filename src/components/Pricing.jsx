import React, { useState } from 'react';

const styles = {
  section: { padding: '100px 0', borderTop: '1px solid #1a1a1a' },
  head: { textAlign: 'center', marginBottom: '56px' },
  label: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#555',
    marginBottom: '8px',
    display: 'block',
  },
  heading: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: 800,
    fontSize: 'clamp(32px, 4vw, 52px)',
    letterSpacing: '-0.02em',
    color: '#f0f0f0',
  },
  tabs: {
    display: 'inline-flex',
    background: '#111',
    border: '1px solid #1e1e1e',
    borderRadius: '8px',
    padding: '4px',
    marginBottom: '48px',
  },
  tab: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: 600,
    fontSize: '13px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    padding: '10px 24px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  tabActive: { background: '#e8ff47', color: '#0a0a0a' },
  tabInactive: { background: 'transparent', color: '#666' },

  grid: {
    display: 'grid',
    gap: '20px',
    maxWidth: '960px',
    margin: '0 auto',
  },
  grid3: { gridTemplateColumns: 'repeat(3, 1fr)' },
  grid3sub: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'stretch',
  },

  /* FIX IS HERE */
  card: {
    background: '#0f0f0f',
    border: '1px solid #1e1e1e',
    borderRadius: '12px',
    padding: '36px 32px',
    position: 'relative',
    transition: 'border-color 0.2s',

    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

  cardPopular: {
    background: '#0f0f0f',
    border: '1px solid rgba(232,255,71,0.3)',
    borderRadius: '12px',
    padding: '36px 32px',
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

  popularBadge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#e8ff47',
    color: '#0a0a0a',
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
    fontSize: '10px',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '4px 14px',
    borderRadius: '100px',
    whiteSpace: 'nowrap',
  },

  cardTitle: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
    fontSize: '17px',
    color: '#f0f0f0',
    marginBottom: '8px',
  },

  cardDesc: {
    fontSize: '13px',
    color: '#555',
    lineHeight: 1.6,
    marginBottom: '24px',
  },

  price: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: 800,
    fontSize: '38px',
    color: '#f0f0f0',
    letterSpacing: '-0.02em',
    lineHeight: 1,
    marginBottom: '4px',
  },

  priceSub: {
    fontSize: '13px',
    color: '#555',
    marginBottom: '28px',
  },

  divider: { height: '1px', background: '#1a1a1a', margin: '24px 0' },

  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '28px',
  },

  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '13px',
    color: '#777',
  },

  check: { color: '#e8ff47', fontSize: '13px', flexShrink: 0, marginTop: '1px' },

  note: { fontSize: '12px', color: '#555', marginBottom: '20px' },

  btnFull: {
    width: '100%',
    padding: '14px',
    borderRadius: '8px',
    fontFamily: 'Syne, sans-serif',
    fontWeight: 700,
    fontSize: '13px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },

  btnAccent: { background: '#e8ff47', color: '#0a0a0a' },
  btnOutline: {
    background: 'transparent',
    color: '#f0f0f0',
    border: '1px solid #2a2a2a',
  },

  upsell: {
    textAlign: 'center',
    marginTop: '40px',
    padding: '32px',
    background: '#0a0a0a',
    border: '1px solid #1a1a1a',
    borderRadius: '12px',
    maxWidth: '960px',
    margin: '40px auto 0',
  },

  upsellText: { fontSize: '15px', color: '#888', marginBottom: '16px' },
};

const oneTimeCards = [
  {
    title: 'Landing Page',
    desc: 'A high-converting landing page designed to help businesses generate leads and establish a strong online presence.',
    price: '$1,750',
    priceSub: 'One-time payment',
    items: [
      '1 custom-designed page',
      'Mobile responsive',
      'Contact form + email notification',
      'Basic on-page SEO',
      'Speed optimization',
      '2 rounds of revisions',
      '100% ownership — yours forever',
    ],
    note: 'Delivered in 5–7 business days',
  },
  {
    title: 'Website Build',
    desc: 'A professional multi-page website built to establish credibility, increase conversions, and support long-term growth.',
    price: '$4,500',
    priceSub: 'One-time payment',
    popular: true,
    items: [
      'Up to 5 custom pages',
      'Mobile responsive design',
      'Contact form + booking integration',
      'Basic on-page SEO setup',
      'Google Analytics installed',
      'Performance optimization',
      '3 rounds of revisions',
      '30-day post-launch support',
      '100% ownership — yours forever',
    ],
    note: 'Delivered in 2–3 weeks',
  },
  {
    title: 'Website + SEO Launch',
    desc: 'A complete website and SEO launch package built to help businesses rank on Google and generate consistent traffic.',
    price: '$6,500',
    priceSub: 'One-time payment',
    items: [
      'Everything in Website Build',
      'Keyword research & strategy',
      'Advanced on-page SEO optimization',
      'Technical SEO audit & fixes',
      'Google Business Profile setup',
      'Google Search Console setup',
      'Performance optimization',
      '30-day post-launch support',
      '100% ownership — yours forever',
    ],
    note: 'Delivered in 3–4 weeks',
  },
];

const subCards = [
  {
    title: 'Quarterly',
    badge: 'Save 15%',
    desc: 'Ongoing website updates, SEO improvements, and priority support for growing businesses.',
    price: '$4,462',
    priceSub: '$1,487/mo effective · Save $788',
    items: [
      'Unlimited website updates',
      '2 active requests at a time',
      '24–72 hour turnaround',
      'Unlimited revisions',
      'Hosting included',
      'Monthly SEO optimization',
      'Priority support',
      'You own everything',
    ],
  },
  {
    title: 'Monthly',
    popular: true,
    desc: 'Flexible ongoing growth support with no long-term commitment.',
    price: '$1,750',
    priceSub: 'Billed monthly · No contract',
    items: [
      'Unlimited website updates',
      '2 active requests at a time',
      '24–72 hour turnaround',
      'Unlimited revisions',
      'Hosting included',
      'Monthly SEO optimization',
      'Priority support',
      'You own everything',
    ],
  },
  {
    title: '6-Month',
    badge: 'Best Value — Save 25%',
    desc: 'Long-term growth partnership with maximum savings and continuous optimization.',
    price: '$7,875',
    priceSub: '$1,312/mo effective · Save $2,625',
    items: [
      'Unlimited website updates',
      '2 active requests at a time',
      '24–72 hour turnaround',
      'Unlimited revisions',
      'Hosting included',
      'Monthly SEO optimization',
      'Priority support',
      'You own everything',
    ],
  },
];

function PriceCard({ card, accent }) {
  const isPopular = card.popular;

  return (
    <div
      style={isPopular ? styles.cardPopular : styles.card}
      onMouseEnter={e =>
        !isPopular && (e.currentTarget.style.borderColor = '#2a2a2a')
      }
      onMouseLeave={e =>
        !isPopular && (e.currentTarget.style.borderColor = '#1e1e1e')
      }
    >
      {isPopular && <div style={styles.popularBadge}>Most Popular</div>}

      {card.badge && !isPopular && (
        <div
          style={{
            ...styles.popularBadge,
            background: '#1e1e1e',
            color: '#e8ff47',
            border: '1px solid rgba(232,255,71,0.2)',
          }}
        >
          {card.badge}
        </div>
      )}

      <div style={styles.cardTitle}>{card.title}</div>
      <div style={styles.cardDesc}>{card.desc}</div>
      <div style={styles.price}>{card.price}</div>
      <div style={styles.priceSub}>{card.priceSub}</div>

      <div style={styles.divider}></div>

      {/* pushes button to bottom */}
      <div style={{ flexGrow: 1 }}>
        <ul style={styles.list}>
          {card.items.map((item, i) => (
            <li key={i} style={styles.listItem}>
              <span style={styles.check}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {card.note && <div style={styles.note}>{card.note}</div>}

        <button
          style={{
            ...styles.btnFull,
            ...(isPopular || accent
              ? styles.btnAccent
              : styles.btnOutline),
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [tab, setTab] = useState('project');

  return (
    <section id="pricing" style={styles.section}>
      <div className="container">
        <div style={styles.head}>
          <span style={styles.label}>Pricing</span>
          <h2 style={styles.heading}>Invest in your digital presence.</h2>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={styles.tabs}>
            <button
              style={{
                ...styles.tab,
                ...(tab === 'project'
                  ? styles.tabActive
                  : styles.tabInactive),
              }}
              onClick={() => setTab('project')}
            >
              One-Time Projects
            </button>

            <button
              style={{
                ...styles.tab,
                ...(tab === 'sub'
                  ? styles.tabActive
                  : styles.tabInactive),
              }}
              onClick={() => setTab('sub')}
            >
              Ongoing Growth
            </button>
          </div>
        </div>

        {tab === 'project' ? (
          <>
            <div
              style={{ ...styles.grid, ...styles.grid3 }}
              className="pricing-grid"
            >
              {oneTimeCards.map((card, i) => (
                <PriceCard key={i} card={card} />
              ))}
            </div>

            <div style={styles.upsell}>
              <p style={styles.upsellText}>
                Want ongoing growth instead? Get unlimited updates, SEO, and hosting
                in one monthly plan.
              </p>

              <button
                style={{
                  ...styles.btnFull,
                  ...styles.btnOutline,
                  width: 'auto',
                  padding: '12px 28px',
                }}
                onClick={() => setTab('sub')}
              >
                View Subscription Plans →
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              style={{ ...styles.grid, ...styles.grid3sub }}
              className="pricing-grid"
            >
              {subCards.map((card, i) => (
                <PriceCard key={i} card={card} accent />
              ))}
            </div>

            <div style={styles.upsell}>
              <p style={styles.upsellText}>
                Not ready for ongoing support? Start with a one-time website build
                instead.
              </p>

              <button
                style={{
                  ...styles.btnFull,
                  ...styles.btnOutline,
                  width: 'auto',
                  padding: '12px 28px',
                }}
                onClick={() => setTab('project')}
              >
                View Project Packages →
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
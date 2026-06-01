import React, { useState } from 'react';

const styles = {
  section: { padding: '100px 0', borderTop: '1px solid #1a1a1a' },
  inner: { maxWidth: '700px', margin: '0 auto' },
  head: { marginBottom: '56px', textAlign: 'center' },
  heading: {
    fontFamily: 'Syne, sans-serif', fontWeight: 800,
    fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em', color: '#f0f0f0',
    marginTop: '12px',
  },
  item: { borderBottom: '1px solid #1a1a1a' },
  question: {
    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '24px 0', textAlign: 'left', gap: '16px',
  },
  qText: {
    fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '16px',
    color: '#f0f0f0', lineHeight: 1.4,
  },
  icon: {
    fontFamily: 'Syne, sans-serif', fontWeight: 300,
    fontSize: '22px', color: '#555', flexShrink: 0, transition: 'transform 0.2s',
  },
  answer: { fontSize: '14px', color: '#666', lineHeight: 1.8, paddingBottom: '24px' },
};

const faqs = [
  { q: 'How fast will I receive my work?', a: 'Most requests are completed in 24–72 hours depending on complexity. Simple updates take about a day, while full landing pages or complex automations take 2–3 days. You\'ll always know the expected turnaround before we start.' },
  { q: 'What counts as one request?', a: 'One request = one deliverable. A landing page is one request. An SEO audit is one request. A contact form with email automation is one request. Larger projects (like a full website) are broken into multiple requests and delivered in phases.' },
  { q: "What if I don't like the result?", a: "No problem! Revisions are unlimited. We'll keep refining the work until you're 100% satisfied. Just leave specific feedback and we'll make the changes." },
  { q: 'How does the pause feature work?', a: 'Billing cycles are 31 days. If you use 20 days and pause, you have 11 days remaining to use whenever you\'re ready. Great for slow months or when you need a break.' },
  { q: 'Who owns the websites you build?', a: 'You do. 100%. All content belongs to you and you can request a full transfer to your own account at any time, at no extra cost.' },
  { q: 'What happens if I cancel?', a: "If you cancel, we'll transfer your website to your own account. You'll then be responsible for any ongoing hosting fees. Everything you've built is yours to keep." },
  { q: 'Do you offer refunds?', a: "Due to the nature of the work, we don't offer refunds — but with unlimited revisions and the ability to pause or cancel anytime, you're never locked in." },
  { q: 'Can you work with my existing website?', a: "It depends on the platform. We can take over and improve existing sites right away, or recommend migration for better performance and easier maintenance. We'll discuss your specific situation during onboarding." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={styles.section}>
      <div className="container">
        <div style={styles.inner}>
          <div style={styles.head}>
            <span className="section-label">Frequently Asked Questions</span>
            <h2 style={styles.heading}>Questions? Answers.</h2>
          </div>
          {faqs.map((f, i) => (
            <div key={i} style={styles.item}>
              <button style={styles.question} onClick={() => setOpen(open === i ? null : i)}>
                <span style={styles.qText}>{f.q}</span>
                <span style={{ ...styles.icon, transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              {open === i && <p style={styles.answer}>{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

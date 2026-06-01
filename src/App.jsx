import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Workflow from './components/Workflow';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Workflow />
        <WhyUs />
        <Services />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

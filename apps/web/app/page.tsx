"use client"
import React from 'react';
import SocialProof from './components/SocialProof';
import Benefits from './components/Benefits';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SocialProof />
        <Benefits />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;

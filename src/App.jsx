import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoFeatures from './components/BentoFeatures';
import OperatingSystem from './components/OperatingSystem';
import CaseStudies from './components/CaseStudies';
import VideoCarousel from './components/VideoCarousel';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Hero />
      <BentoFeatures />
      <OperatingSystem />
      <CaseStudies />
      <VideoCarousel />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;

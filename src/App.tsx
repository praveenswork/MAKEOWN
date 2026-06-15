/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { InteractiveParticlesBg } from './components/InteractiveParticlesBg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#ffffff] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-350 select-none selection:bg-blue-500/20 selection:dark:bg-blue-400/20 relative overflow-hidden">
        
        {/* Dynamic Canvas Particles Background spanning all content layers */}
        <InteractiveParticlesBg />
        
        {/* Custom cursor for high-fidelity interactive engagement */}
        <CustomCursor />
        
        {/* Navigation Elements */}
        <Navbar />

        {/* Core Layout divisions */}
        <main className="relative">
          {/* Section 1: Home / Hero section with corporate triggers */}
          <Hero />

          {/* Section 2: About Us specifications */}
          <About />

          {/* Section 3: 4x3 Services Suite */}
          <Services />

          {/* Section 4: Features grid */}
          <Features />

          {/* Section 5: Customized contacts & Glass Inquiry Desk */}
          <Contact />
        </main>

        {/* Simplified Footer with requested exact handles */}
        <Footer />
        
      </div>
    </ThemeProvider>
  );
}

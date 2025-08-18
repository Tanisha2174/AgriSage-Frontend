import React from 'react';
import { Header, TeamBanner } from './components/Header';
import { Hero } from './components/Hero';
import { DemoInterface } from './components/DemoInterface';
import { Architecture } from './components/Architecture';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
     <Header />
    
      <Hero />
      <div id="demo">
        <DemoInterface />
      </div>
      <div id="features">
        <Benefits />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
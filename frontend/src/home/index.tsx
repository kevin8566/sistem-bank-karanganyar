import React from 'react';
import Navbar from './layout/Navbar';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Komponen Navigasi */}
      <Navbar />
      
      <main>
        {/* Bagian Pahlawan (Hero) */}
        <HeroSection />
        
        {/* Bagian Alur Proses (3 Kotak) */}
        <ProcessSection />
      </main>
    </div>
  );
};

export default Home;
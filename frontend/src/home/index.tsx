import React from 'react';
import Navbar from './layout/Navbar';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection'; // Import baru
import Footer from './layout/Footer';             // Import baru

const Home: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-white flex flex-col">
      <Navbar />
      
      {/* flex-grow memastikan footer selalu terdorong ke bawah walau konten sedikit */}
      <main className="flex-grow">
        <HeroSection />
        <ProcessSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
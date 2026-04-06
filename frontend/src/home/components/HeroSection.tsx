import React from 'react';
// 1. Mengimpor gambar sebagai modul agar diproses dengan benar oleh Vite.
// Jalur '../../' mundur dua tingkat dari src/home/components/ ke folder src/
import heroImage from '../../assets/images/home.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F8FAFC] overflow-hidden pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Teks & CTA */}
          <div className="z-10 mt-10 lg:mt-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
              Layanan Aduan & <br /> 
              Informasi Terpadu <br />
              <span className="text-bank-blue">Bank Karanganyar</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Sampaikan keluhan atau pertanyaan Anda dengan mudah. Tidak Perlu Login.
            </p>
            <button className="bg-bank-blue hover:bg-blue-900 text-white font-semibold py-3.5 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
              Buat Aduan / Laporan Sekarang
            </button>
          </div>

          {/* Ilustrasi & Blob Background */}
          {/* PERUBAHAN: Menggunakan min-h agar kontainer bisa meregang di layar besar */}
          <div className="relative flex justify-center lg:justify-end items-center min-h-[400px] lg:min-h-[520px]">
            
            {/* Blob Biru (Latar belakang geometris) */}
            <div className="absolute right-0 top-0 w-[110%] h-[120%] bg-bank-blue rounded-l-full translate-x-12 -translate-y-10 z-0 transition-all duration-700"></div>
            <div className="absolute right-0 bottom-0 w-[80%] h-32 bg-bank-yellow rounded-l-full translate-x-10 translate-y-16 z-0 transition-all duration-700"></div>
            
            {/* PERUBAHAN UKURAN GAMBAR:
              - max-w-[350px] untuk mobile/HP
              - lg:max-w-[550px] untuk Laptop standar
              - xl:max-w-[620px] untuk layar lebar (Monitor/Predator)
              - hover:scale-105 memberikan efek membesar saat mouse diarahkan
            */}
            <img 
              src={heroImage} 
              alt="Ilustrasi Nasabah Bank Karanganyar menggunakan Layanan Aduan Digital" 
              className="relative z-10 w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[620px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
// 1. Mengimpor gambar sebagai modul agar diproses dengan benar oleh Vite.
// Jalur '../../../' mundur tiga tingkat dari src/home/components/ ke folder src/
import heroImage from '../../assets/images/ddd.png';

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
          <div className="relative flex justify-center lg:justify-end items-center h-[400px]">
            {/* Blob Biru (Latar belakang geometris sesuai desain) */}
            <div className="absolute right-0 top-0 w-full h-[120%] bg-bank-blue rounded-l-full translate-x-12 -translate-y-10 z-0"></div>
            <div className="absolute right-0 bottom-0 w-[80%] h-32 bg-bank-yellow rounded-l-full translate-x-10 translate-y-16 z-0"></div>
            
            {/* 2. Menggunakan variabel 'heroImage' yang diimpor di atas pada atribut src. 
               Cara ini menjamin gambar muncul 100% accurate, baik saat development maupun production.
            */}
            <img 
              src={heroImage} 
              alt="Ilustrasi Nasabah Bank Karanganyar menggunakan Layanan Aduan Digital" 
              className="relative z-10 w-full max-w-[450px] object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
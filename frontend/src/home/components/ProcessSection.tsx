import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Formulir Aduan Mandiri</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative">
          
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col items-center justify-center w-64 h-56 z-10 transition-transform hover:scale-105">
            <img src="/src/assets/icons/ticket.png" alt="Tiket" className="w-20 mb-6" />
            <h3 className="text-lg font-bold text-gray-800">1. Isi Formulir</h3>
          </div>

          <ArrowRight className="text-bank-blue w-8 h-8 hidden md:block" />

          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col items-center justify-center w-64 h-56 z-10 transition-transform hover:scale-105">
            <img src="/src/assets/icons/wa-phone.png" alt="Validasi WA" className="w-20 mb-6" />
            <h3 className="text-lg font-bold text-gray-800">2. Validasi WA</h3>
          </div>

          <ArrowRight className="text-bank-blue w-8 h-8 hidden md:block" />

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col items-center justify-center w-64 h-56 z-10 transition-transform hover:scale-105">
              <img src="/src/assets/icons/pdf-qr.png" alt="Unduh PDF" className="w-20 mb-6" />
              <h3 className="text-lg font-bold text-gray-800">3. Unduh PDF</h3>
            </div>

            <div className="absolute -bottom-16 -right-12 bg-white rounded-xl shadow-xl border border-gray-100 p-4 flex items-center gap-3 z-20 w-[280px]">
              <div className="bg-green-100 rounded-full p-1">
                <CheckCircle2 className="text-green-500 w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 font-medium">Nomor Tiket: #TKT-BK-28240501</p>
                <button className="mt-1 bg-bank-blue text-white text-xs font-semibold py-1.5 px-3 rounded hover:bg-blue-800 transition-colors">
                  Lanjutkan Ke WhatsApp Bank
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
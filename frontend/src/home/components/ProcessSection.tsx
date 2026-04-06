import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/** * ANALISIS PERUBAHAN:
 * Kita menonaktifkan import lokal (../../assets/icons/...) untuk sementara.
 * Kita menggunakan URL CDN agar Vite tidak error 'Failed to resolve import'.
 * Anda bisa menggantinya kembali ke import lokal setelah file .png sudah ada di folder.
 */
const icTicket = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"; 
const icWA = "https://cdn-icons-png.flaticon.com/512/733/733585.png";      
const icPDF = "https://cdn-icons-png.flaticon.com/512/337/337946.png";     

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Formulir Aduan Mandiri</h2>
        </div>

        {/* Container Alur Proses */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative">
          
          {/* Langkah 1: Isi Formulir */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col items-center justify-center w-64 h-56 z-10 transition-transform hover:scale-105">
            <img src={icTicket} alt="Ikon Tiket" className="w-20 mb-6 opacity-80" />
            <h3 className="text-lg font-bold text-gray-800">1. Isi Formulir</h3>
          </div>

          <ArrowRight className="text-bank-blue w-8 h-8 hidden md:block opacity-30" />

          {/* Langkah 2: Validasi WA */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col items-center justify-center w-64 h-56 z-10 transition-transform hover:scale-105">
            <img src={icWA} alt="Ikon WhatsApp" className="w-20 mb-6 opacity-80" />
            <h3 className="text-lg font-bold text-gray-800">2. Validasi WA</h3>
          </div>

          <ArrowRight className="text-bank-blue w-8 h-8 hidden md:block opacity-30" />

          {/* Langkah 3: Unduh PDF */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 flex flex-col items-center justify-center w-64 h-56 z-10 transition-transform hover:scale-105">
              <img src={icPDF} alt="Ikon PDF" className="w-20 mb-6 opacity-80" />
              <h3 className="text-lg font-bold text-gray-800">3. Unduh PDF</h3>
            </div>

            {/* Notifikasi/Tooltip Berhasil (Floating Card) */}
            <div className="absolute -bottom-16 -right-12 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 flex items-center gap-3 z-20 w-[280px] animate-bounce-slow">
              <div className="bg-green-100 rounded-full p-2">
                <CheckCircle2 className="text-green-500 w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Berhasil Dibuat</p>
                <p className="text-xs text-gray-700 font-medium">Tiket: #TKT-BK-28240501</p>
                <button className="mt-2 bg-bank-blue text-white text-[10px] font-bold py-1.5 px-3 rounded-lg hover:bg-blue-800 transition-all">
                  Lanjutkan Ke WhatsApp
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
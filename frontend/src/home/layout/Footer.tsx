import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bank-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-blue-800 pb-12">
          
          {/* Kolom 1: Identitas */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-bank-yellow mr-1">BK</span> Bank Karanganyar
            </h2>
            <p className="text-blue-200 leading-relaxed">
              Mitra keuangan terpercaya Anda. Melayani dengan integritas dan inovasi untuk kesejahteraan bersama.
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Tautan Cepat</h3>
            <ul className="space-y-3 text-blue-200">
              <li><a href="#" className="hover:text-bank-yellow transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-bank-yellow transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-bank-yellow transition-colors">Sistem Aduan</a></li>
              <li><a href="#" className="hover:text-bank-yellow transition-colors">Permintaan Informasi</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Hubungi Kami</h3>
            <ul className="space-y-3 text-blue-200">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Jl. Lawu No. 123, Kabupaten Karanganyar, Jawa Tengah</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>(0271) 1234567</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>cs@bankkaranganyar.co.id</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Hak Cipta */}
        <div className="text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Bank Karanganyar. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="mt-1 text-xs text-blue-400">Terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK)</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
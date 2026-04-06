// components/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageSquarePlus, Search, Info } from 'lucide-react';

const Sidebar = () => {
  // 1. Menggunakan useLocation dari react-router-dom
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Buat Pengaduan', icon: MessageSquarePlus, path: '/buat-pengaduan' },
    { name: 'Lacak Pengaduan', icon: Search, path: '/lacak' },
    { name: 'Informasi Layanan', icon: Info, path: '/info' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#151c2c] text-white flex flex-col">
      {/* Logo Area */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-bold text-xl text-[#151c2c]">
          K
        </div>
        <div>
          <h1 className="font-bold text-sm tracking-wide">BANK KARANGANYAR</h1>
          <p className="text-[10px] text-gray-400">Sistem Informasi & Pengaduan (Admin Portal)</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 mt-6 space-y-2">
        {menuItems.map((item) => {
          // 2. Mengecek path aktif menggunakan location.pathname
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            // 3. Menggunakan 'to' bukan 'href' untuk react-router-dom
            <Link key={item.name} to={item.path}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                  isActive 
                    ? 'bg-yellow-500 text-[#151c2c] font-medium' 
                    : 'text-gray-300 hover:bg-[#1e273c]'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
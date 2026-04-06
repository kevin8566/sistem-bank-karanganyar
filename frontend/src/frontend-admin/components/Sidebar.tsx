import { LayoutDashboard, FilePlus, Search, Info } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard />, active: true },
    { name: 'Buat Pengaduan', icon: <FilePlus />, active: false },
    { name: 'Lacak Pengaduan', icon: <Search />, active: false },
    { name: 'Informasi Layanan', icon: <Info />, active: false },
  ];

  return (
    <div className="w-64 bg-[#001D3D] min-h-screen text-white p-4">
      <div className="space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
              item.active ? 'bg-[#EDAC00] text-black font-bold' : 'hover:bg-white/10'
            }`}
          >
            {item.icon} {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
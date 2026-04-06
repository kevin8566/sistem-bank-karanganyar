import Sidebar from '../components/Sidebar';
import TablePengaduan from '../components/TablePengaduan';
import { ClipboardList, Clock, CheckCircle2, XCircle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Pengaduan', count: 156, icon: <ClipboardList />, color: 'text-blue-600 bg-blue-100' },
    { title: 'Dalam Proses', count: 23, icon: <Clock />, color: 'text-yellow-600 bg-yellow-100' },
    { title: 'Selesai', count: 120, icon: <CheckCircle2 />, color: 'text-green-600 bg-green-100' },
    { title: 'Ditolak', count: 13, icon: <XCircle />, color: 'text-red-600 bg-red-100' },
  ];

  return (
    <div className="flex bg-[#F4F7FE] min-h-screen">
      <Sidebar />
      
      <main className="flex-1">
        {/* Header */}
        <header className="bg-[#002A5B] p-4 text-white flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-3">
            <div className="bg-[#EDAC00] p-2 rounded">BK</div>
            <div>
              <h1 className="font-bold text-lg leading-none">BANK KARANGANYAR</h1>
              <p className="text-xs text-white/70">Sistem Informasi & Pengaduan (Admin Portal)</p>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-[#001D3D]">Dashboard</h2>
          <p className="text-gray-500">Selamat datang di sistem pengaduan Bank Karanganyar</p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {stats.map((s) => (
              <div key={s.title} className="bg-white p-6 rounded-xl shadow-sm border flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{s.title}</p>
                  <p className="text-3xl font-bold mt-1">{s.count}</p>
                </div>
                <div className={`p-3 rounded-xl ${s.color}`}>{s.icon}</div>
              </div>
            ))}
          </div>

          <TablePengaduan data={sampleData} />
        </div>
      </main>
    </div>
  );
};

const sampleData = [
  { no: 'ADU-2026-0345', kategori: 'Kartu ATM', status: 'Selesai', tanggal: '01 Apr 2026' },
  { no: 'ADU-2026-0344', kategori: 'Internet Banking', status: 'Selesai', tanggal: '31 Mar 2026' },
  { no: 'ADU-2026-0343', kategori: 'Transfer Bermasalah', status: 'Dalam Proses', tanggal: '30 Mar 2026' },
];

export default Dashboard;
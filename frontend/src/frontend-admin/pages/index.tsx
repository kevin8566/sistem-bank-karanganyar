// pages/index.tsx
import { useEffect } from 'react';
import Layout from '../components/Layout';
import StatCard from '../components/StatCard';
import type { Pengaduan, StatData } from '../types/dashboard';

export default function Home() {
  // Mengatur judul halaman menggunakan useEffect standar React
  useEffect(() => {
    document.title = "Dashboard | Bank Karanganyar";
  }, []);

  // Mock Data untuk Statistik (Idealnya ini dari hooks/services API Anda)
  const stats: StatData[] = [
    { title: 'Total Pengaduan', count: 156, type: 'total' },
    { title: 'Dalam Proses', count: 23, type: 'proses' },
    { title: 'Selesai', count: 120, type: 'selesai' },
    { title: 'Ditolak', count: 13, type: 'ditolak' },
  ];

  // Mock Data untuk Tabel
  const recentComplaints: Pengaduan[] = [
    { id: 'ADU-2026-0345', kategori: 'Kartu ATM', status: 'Selesai', tanggal: '01 Apr 2026' },
    { id: 'ADU-2026-0344', kategori: 'Internet Banking', status: 'Selesai', tanggal: '31 Mar 2026' },
    { id: 'ADU-2026-0343', kategori: 'Transfer Bermasalah', status: 'Dalam Proses', tanggal: '30 Mar 2026' },
    { id: 'ADU-2026-0342', kategori: 'Pelayanan', status: 'Selesai', tanggal: '29 Mar 2026' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Selesai':
        return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Selesai</span>;
      case 'Dalam Proses':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Dalam Proses</span>;
      case 'Ditolak':
        return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Ditolak</span>;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Dashboard</h1>
        <p className="text-gray-500 text-sm">Selamat datang di sistem pengaduan Bank Karanganyar</p>
      </div>

      {/* Grid Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} data={stat} />
        ))}
      </div>

      {/* Tabel Pengaduan Terbaru */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Pengaduan Terbaru</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#eef2f6] text-gray-600 text-sm">
              <tr>
                <th className="px-6 py-4 font-medium">No. Pengaduan</th>
                <th className="px-6 py-4 font-medium">Kategori</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Tanggal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentComplaints.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700">{item.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.kategori}</td>
                  <td className="px-6 py-4">{getStatusBadge(item.status)}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.tanggal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
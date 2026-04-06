import type { Pengaduan } from '../types/admin';
const TablePengaduan = ({ data }: { data: Pengaduan[] }) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Selesai': return 'bg-green-100 text-green-700';
      case 'Dalam Proses': return 'bg-yellow-100 text-yellow-700';
      case 'Ditolak': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border mt-6 overflow-hidden">
      <div className="p-4 font-bold border-b bg-gray-50">Pengaduan Terbaru</div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-50/50 text-sm">
            <th className="p-4 border-b">No. Pengaduan</th>
            <th className="p-4 border-b">Kategori</th>
            <th className="p-4 border-b">Status</th>
            <th className="p-4 border-b">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.no} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 border-b">{row.no}</td>
              <td className="p-4 border-b">{row.kategori}</td>
              <td className="p-4 border-b">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(row.status)}`}>
                  {row.status}
                </span>
              </td>
              <td className="p-4 border-b text-gray-500">{row.tanggal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TablePengaduan;
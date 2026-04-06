export interface StatCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}

export interface Pengaduan {
  no: string;
  kategori: string;
  status: 'Selesai' | 'Dalam Proses' | 'Ditolak';
  tanggal: string;
}
// types/dashboard.ts

export type StatusPengaduan = 'Selesai' | 'Dalam Proses' | 'Ditolak';

export interface Pengaduan {
  id: string;
  kategori: string;
  status: StatusPengaduan;
  tanggal: string;
}

export interface StatData {
  title: string;
  count: number;
  type: 'total' | 'proses' | 'selesai' | 'ditolak';
}
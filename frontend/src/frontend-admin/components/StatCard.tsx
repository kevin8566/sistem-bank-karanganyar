// components/StatCard.tsx
import type { StatData } from '../types/dashboard';
import { FileText, Clock, CheckCircle2, XCircle } from 'lucide-react';

interface StatCardProps {
  data: StatData;
}

const StatCard = ({ data }: StatCardProps) => {
  const getIconAndColor = () => {
    switch (data.type) {
      case 'total':
        return { icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100/50', iconBg: 'bg-[#1e293b]' };
      case 'proses':
        return { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100/50', iconBg: 'bg-yellow-500' };
      case 'selesai':
        return { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100/50', iconBg: 'bg-green-700' };
      case 'ditolak':
        return { icon: XCircle, color: 'text-red-600', bg: 'bg-red-100/50', iconBg: 'bg-red-800' };
    }
  };

  const { icon: Icon, iconBg } = getIconAndColor();

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 font-medium mb-1">{data.title}</p>
        <h3 className="text-3xl font-bold text-gray-800">{data.count}</h3>
      </div>
      <div className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center text-white`}>
        <Icon size={24} />
      </div>
    </div>
  );
};

export default StatCard;
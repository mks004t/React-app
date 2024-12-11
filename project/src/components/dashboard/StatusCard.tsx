import React from 'react';
import Card from '../ui/Card';

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  status?: 'success' | 'warning' | 'error';
}

const StatusCard = ({ title, value, icon, status = 'success' }: StatusCardProps) => {
  const statusColors = {
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500'
  };

  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className={`text-2xl font-bold ${statusColors[status]}`}>{value}</p>
        </div>
        <div className={`p-3 rounded-full bg-gray-100 ${statusColors[status]}`}>
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatusCard;
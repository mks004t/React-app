import React from 'react';
import Card from '../ui/Card';

interface ChartProps {
  title: string;
  children: React.ReactNode;
}

const Chart = ({ title, children }: ChartProps) => {
  return (
    <Card className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="h-64">
        {children}
      </div>
    </Card>
  );
};

export default Chart;
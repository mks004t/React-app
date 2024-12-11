import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Thermometer, TrendingUp, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import StatusCard from '../components/dashboard/StatusCard';
import Chart from '../components/dashboard/Chart';
import { fetchConveyorStatus } from '../utils/api';
import type { ConveyorStatus } from '../types';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState<ConveyorStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const loadStatus = async () => {
      try {
        const data = await fetchConveyorStatus();
        setStatus(data);
      } catch (error) {
        console.error('Error fetching status:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStatus();
  }, [isAuthenticated, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatusCard
          title="System Status"
          value={status?.systemStatus || 'Operational'}
          icon={<Activity className="h-6 w-6" />}
          status="success"
        />
        <StatusCard
          title="Temperature"
          value={`${status?.temperature || 0}°C`}
          icon={<Thermometer className="h-6 w-6" />}
          status={status?.temperatureStatus}
        />
        <StatusCard
          title="Speed"
          value={`${status?.speed || 0} m/s`}
          icon={<TrendingUp className="h-6 w-6" />}
          status={status?.speedStatus}
        />
        <StatusCard
          title="Alerts"
          value={status?.activeAlerts || 0}
          icon={<AlertTriangle className="h-6 w-6" />}
          status={status?.activeAlerts > 0 ? 'error' : 'success'}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="Performance Metrics">
          {/* Add chart implementation here */}
        </Chart>
        <Chart title="Temperature Trends">
          {/* Add chart implementation here */}
        </Chart>
      </div>
    </div>
  );
};

export default Dashboard;
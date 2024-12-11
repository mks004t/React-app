export interface ConveyorStatus {
  systemStatus: string;
  temperature: number;
  temperatureStatus: 'success' | 'warning' | 'error';
  speed: number;
  speedStatus: 'success' | 'warning' | 'error';
  activeAlerts: number;
}

export interface ConveyorSettings {
  speed: number;
  temperature: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
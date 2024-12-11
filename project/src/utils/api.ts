import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchConveyorStatus = async () => {
  const response = await api.get('/conveyors/status');
  return response.data;
};

export const updateConveyorSettings = async (id: string, settings: any) => {
  const response = await api.put(`/conveyors/settings/${id}`, settings);
  return response.data;
};

export default api;
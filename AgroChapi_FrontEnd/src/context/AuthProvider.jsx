import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import API from '../api/axios';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserAndModules = async () => {
    try {
      const [userRes, modulesRes] = await Promise.all([
        API.get('account/me/'),
        API.get('/core/modules/allowed/')
      ]);
      setUser(userRes.data);
      setModules(modulesRes.data);
    } catch {
      setUser(null);
      setModules([]);
    }
  };

  const login = async (dni, password) => {
    const response = await API.post('token/', { dni, password });

    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    API.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;

    await fetchUserAndModules();
    navigate('/');
  };

  useEffect(() => {
    const initialize = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await fetchUserAndModules();
      }
      setLoading(false);
    };
    initialize();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, modules, setModules, loading, login }}>
      {children}
    </AuthContext.Provider>
  );
};

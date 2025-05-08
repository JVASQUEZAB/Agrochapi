import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

// Interceptor de petición para inyectar token
API.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Interceptor de respuesta para manejar expiración de token
API.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Evitar bucle infinito

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          // Pides nuevo token
          const response = await axios.post('http://localhost:8000/api/token/refresh/', {
            refresh: refreshToken,
          });

          const newAccessToken = response.data.access;
          
          // Guardas nuevo token
          localStorage.setItem('access_token', newAccessToken);

          // Actualizas Authorization header
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

          // Reintentas la solicitud original
          return API(originalRequest);
        }
      } catch (refreshError) {
        console.error('Error al refrescar token', refreshError);
        // Si refresh falla, limpias sesión
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login'; // Rediriges al login
      }
    }

    return Promise.reject(error);
  }
);

export default API;


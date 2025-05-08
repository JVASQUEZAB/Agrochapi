import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext'; // Asegúrate de que la ruta sea la correcta

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }

  return context;
};

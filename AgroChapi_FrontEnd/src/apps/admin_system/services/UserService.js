import API from '../../../api/axios';
import { showToast } from '../../../lib/toast';

export const getUsers = async () => {
  try {
    const response = await API.get('core/users/');
    return response.data;
  } catch (error) {
    showToast('error', 'Error al cargar usuarios', error?.response?.data?.detail || 'Error desconocido');
    throw error;
  }
};

export const deleteUser = async (id) => {
try {
    const response = await API.delete(`core/users/${id}/`);
    return response.data;
} catch (error) {
  showToast('error', 'Error al eliminar el usuario', error?.response?.data?.detail || 'Error desconocido');
  throw error;
}
};

// Opcional: editar usuario
export const updateUser = async (id, data) => {
  try {
    const response = await API.put(`core/users/${id}/`, data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el usuario:', error.response?.data || error.message);
    showToast('error', 'Error al actualizar usuario', error?.response?.data?.detail || 'Error desconocido');
    throw error;
  }
};
import API from '../../../api/axios';
import { showToast } from '../../../lib/toast';

const API_URL = 'core/master/cultivos/';


export const getCrops = async () => {
  try {
    const response = await API.get(API_URL);
    return response.data;
  } catch (error) {
    showToast('error', 'Error al cargar trabajos', error?.response?.data?.detail || 'Error desconocido');
    throw error;
  }
}


export const deleteCrop = async (id) => {
  try {
    const response = await API.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    showToast('error', 'Error al eliminar el trabajo', error?.response?.data?.detail || 'Error desconocido');
    throw error;
  }
}


export const updateCrop = async (id, data) => {
  try {
    const response = await API.patch(`${API_URL}${id}/`, data);
    return response.data;
  } catch (error) {
    showToast('error', 'Error al actualizar trabajo', error?.response?.data?.detail || 'Error desconocido');
    throw error;
  }
}


export const createCrop = async (data) => {
  try {
    const response = await API.post(API_URL, data);
    return response.data;
  } catch (error) {
    showToast('error', 'Error al crear trabajo', error?.response?.data?.detail || 'Error desconocido');
    throw error;
  }
}

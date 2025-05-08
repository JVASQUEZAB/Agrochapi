import API from '../../../api/axios';
import { showToast } from '../../../lib/toast';



const API_URL = 'core/master/labores/'

export const getWorks = async ({ page = 1, pageSize = 20 }) => {
  try {
    const response = await API.get(API_URL, {
      params: { 
        page: page, 
        page_size: pageSize, 
      },
    });
    return response.data; // debe incluir `results`, `count`, etc.
  } catch (error) {
    showToast('error', 'Error al cargar trabajos', error?.response?.data?.detail || 'Error desconocido');
    throw error;
  }
};

export const deleteWork = async (id) => {
  try {
    const response = await API.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    showToast('error', 'Error al eliminar el trabajo', error?.response?.data?.detail || 'Error desconocido');
    throw error;
  }
}


export const updateWork = async (id, data) => {
  try {
    const response = await API.patch(`${API_URL}${id}/`, data);
    return response.data;
  } catch (error) {
    showToast('error', 'Error al actualizar trabajo', error?.response?.data?.detail || 'Error desconocido');
    throw error;
  }
}


export const createWork = async (data) => {
  try {
    const response = await API.post(API_URL, data);
    return response.data;
  } catch (error) {
    showToast('error', 'Error al crear trabajo', error?.response?.data?.detail || 'Error desconocido');
    throw error;
  }
}

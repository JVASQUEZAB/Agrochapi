import API from '../../../api/axios';
import { showToast } from '../../../lib/toast';


const API_URL = 'core/roles/';


export const getRoles = async () => {
  try {
    const response = await API.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al cargar roles', error);
    showToast('error', 'Error al cargar roles', error?.response?.data?.detail || 'Error desconocido');
    throw error;
  }
};

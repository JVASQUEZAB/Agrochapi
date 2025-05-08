import API from '../../../api/axios';
import { showToast } from '../../../lib/toast';


const API_URL = 'core/master/actividades/'

export const getActivity = async () => {
    try {
        const response = await API.get(API_URL);
        return response.data;
    } catch (error) {
        showToast('error', 'Error al cargar actividades', error?.response?.data?.detail || 'Error desconocido');
        throw error;
    }
}

export const deleteActivity = async (id) => {
    try {
        const response = await API.delete(`${API_URL}${id}/`);
        return response.data;
    } catch (error) {
        showToast('error', 'Error al eliminar la actividad', error?.response?.data?.detail || 'Error desconocido');
        throw error;
    }
}

export const updateActivity = async (id, data) => {
    try {
        const response = await API.patch(`${API_URL}${id}/`, data);
        return response.data;
    } catch (error) {
        showToast('error', 'Error al actualizar actividad', error?.response?.data?.detail || 'Error desconocido');
        throw error;
    }
}

export const createActivity = async (data) => {
    try {
        const response = await API.post(API_URL, data);
        return response.data;
    } catch (error) {
        showToast('error', 'Error al crear actividad', error?.response?.data?.detail || 'Error desconocido');
        throw error;
    }
}
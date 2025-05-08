import API from '../../../api/axios';
import { showToast } from '../../../lib/toast';


const API_URL = 'core/master/fundos/'

export const getGrowers = async () => {
    try {
        const response = await API.get(API_URL);
        return response.data;
    } catch (error) {
        showToast('error', 'Error al cargar los cultivadores', error?.response?.data?.detail || 'Error desconocido');
        throw error;
    }
}

export const deleteGrower = async (id) => {
    try {
        const response = await API.delete(`${API_URL}${id}/`);
        return response.data;
    } catch (error) {
        showToast('error', 'Error al eliminar el cultivador', error?.response?.data?.detail || 'Error desconocido');
        throw error;
    }
}

export const updateGrower = async (id, data) => {
    try {
        const response = await API.patch(`${API_URL}${id}/`, data);
        return response.data;
    } catch (error) {
        showToast('error', 'Error al actualizar el cultivador', error?.response?.data?.detail || 'Error desconocido');
        throw error;
    }
}

export const createGrower = async (data) => {
    try {
        const response = await API.post(API_URL, data);
        return response.data;
    } catch (error) {
        showToast('error', 'Error al crear el cultivador', error?.response?.data?.detail || 'Error desconocido');
        throw error;
    }
}


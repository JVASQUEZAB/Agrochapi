import API from '../../../api/axios';
import { showToast } from '../../../lib/toast';


const API_URL = 'core/permissions/modulespermission/';

export const fetchPermissions = async () => {
  try {
    const { data } = await API.get(API_URL);
    return data;
  } catch (error) {
    showToast('error', 'Error al cargar permisos');
    throw error;
  }
};

export const updatePermission = async (permission) => {
  try {
    return await API.put(`${API_URL}${permission.id}/`, {
      role: permission.role,
      module: permission.module,
      allowed: permission.allowed,
    });
  } catch (error) {
    showToast('error', 'Error al modificar permisos');
    throw error;
  }
};

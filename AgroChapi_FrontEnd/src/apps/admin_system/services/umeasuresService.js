import API from "../../../api/axios";
import { showToast } from "../../../lib/toast";



const API_URL = 'core/master/umedida/ '

export const getUmeasures = async () => {
  try {
    const response = await API.get(API_URL);
    return response.data;
  } catch (error) {
    showToast(
      "error",
      "Error al cargar unidades de medida",
      error?.response?.data?.detail || "Error desconocido"
    );
    throw error;
  }
}


export const deleteUmeasure = async (id) => {
  try {
    const response = await API.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    showToast(
      "error",
      "Error al eliminar la unidad de medida",
      error?.response?.data?.detail || "Error desconocido"
    );
    throw error;
  }
}


export const updateUmeasure = async (id, data) => {
  try {
    const response = await API.patch(`${API_URL}${id}/`, data);
    return response.data;
  } catch (error) {
    showToast(
      "error",
      "Error al actualizar unidad de medida",
      error?.response?.data?.detail || "Error desconocido"
    );
    throw error;
  }
}


export const createUmeasure = async (data) => {
  try {
    const response = await API.post(API_URL, data);
    return response.data;
  } catch (error) {
    showToast(
      "error",
      "Error al crear unidad de medida",
      error?.response?.data?.detail || "Error desconocido"
    );
    throw error;
  }
}

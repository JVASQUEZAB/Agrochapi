// src/apps/admin_system/services/UserService.js
import API from '../../../api/axios'; // Asegúrate de tener importado correctamente el axios


export const getUsers = async (userData) => {
    try {
      const response = await API.get('/core/users/', userData);
      return response.data;
    } catch (error) {
      console.error("Error al crear usuario", error);
      throw error;
    }
  };

export const createUser = async (userData) => {
  try {
    const response = await API.post('/core/users/', userData); // Suponiendo que la API esté configurada para crear usuarios
    return response.data;
  } catch (error) {
    console.error("Error al crear usuario", error);
    throw error;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await API.put(`/core/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar usuario", error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    await API.delete(`/core/users/${userId}`);
  } catch (error) {
    console.error("Error al eliminar usuario", error);
    throw error;
  }
};

// Asegúrate de exportar las funciones que estás usando

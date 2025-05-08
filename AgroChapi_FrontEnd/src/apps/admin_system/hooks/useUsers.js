import { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../services/UserService';
import { showToast } from '../../../lib/toast';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      await new Promise((resolve) => setTimeout(resolve, 200));
      setUsers(response);
    } catch (error) {
      showToast('error', 'Error al obtener usuarios');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const create = async (userData) => {
    try {
      await createUser(userData);
      showToast('success', 'Usuario creado correctamente');
      await fetchUsers();
    } catch (error) {
      showToast('error', 'Error al crear usuario', error?.response?.data?.detail || 'Error desconocido');
    }
  };

  const update = async (id, userData) => {
    try {
      await updateUser(id, userData);
      showToast('success', 'Usuario actualizado correctamente');
      await fetchUsers();
    } catch (error) {
      showToast('error', 'Error al actualizar usuario', error?.response?.data?.detail || 'Error desconocido');
    }
  };

  const remove = async (id) => {
    try {
      await deleteUser(id);
      showToast('success', 'Usuario eliminado correctamente');
      await fetchUsers();
    } catch (error) {
      showToast('error', 'Error al eliminar usuario', error?.response?.data?.detail || 'Error desconocido');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    fetchUsers,
    create,
    update,
    remove,
  };
};

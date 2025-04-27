import React, { useEffect, useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../services/UserService';
import MiTabla from '../components/Users';
import UserForm from '../components/UserForm';
import { showToast } from '../../../lib/toast'; // Importamos la función showToast

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    role: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        showToast('error', 'Error al cargar usuarios', 'No se pudo cargar la lista de usuarios', err);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleCreateUser = async () => {
    try {
      const createdUser = await createUser(userData);
      setUsers([...users, createdUser]);
      showToast('success', 'Usuario creado', 'El usuario se ha creado con éxito');
      setUserData({ first_name: '', last_name: '', email: '', role: '' });
    } catch (err) {
      showToast('error', 'Error al crear usuario', 'Hubo un problema al crear el usuario', err);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const updatedUser = await updateUser(currentUserId, userData);
      setUsers(users.map(user => user.id === currentUserId ? updatedUser : user));
      showToast('success', 'Usuario actualizado', 'El usuario se ha actualizado con éxito');
      setIsEditing(false);
      setUserData({ first_name: '', last_name: '', email: '', role: '' });
    } catch (err) {
      showToast('error', 'Error al actualizar usuario', 'Hubo un problema al actualizar el usuario', err);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
      showToast('success', 'Usuario eliminado', 'El usuario se ha eliminado con éxito');
    } catch (err) {
      showToast('error', 'Error al eliminar usuario', 'Hubo un problema al eliminar el usuario', err);
    }
  };

  const handleEdit = (userId) => {
    const userToEdit = users.find(user => user.id === userId);
    setUserData({ first_name: userToEdit.first_name, last_name: userToEdit.last_name, email: userToEdit.email, role: userToEdit.role });
    setIsEditing(true);
    setCurrentUserId(userId);
  };

  return (
    <div>
      <h1 className="text-2xl">Gestión de Usuarios</h1>
      
      {loading ? <p>Cargando...</p> : (
        <>
          <MiTabla />
          
          <UserForm userData={userData} onChange={handleChange} onSubmit={isEditing ? handleUpdateUser : handleCreateUser} isEditing={isEditing} />
        </>
      )}
    </div>
  );
};

export default UsersPage;

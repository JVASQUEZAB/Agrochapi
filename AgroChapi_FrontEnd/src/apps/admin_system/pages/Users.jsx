import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser, updateUser } from '../services/UserService';
import { showLoadingToast, dismissToast } from '../../../lib/toast';
import UsersTable from '../components/users/UsersTable';
import EditUserModal from '../components/users/EditUserModal';
import DeleteUserModal from '../components/users/DeleteUserModal';
import CreateUserModal from '../components/users/CreateUserModal';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      const loadingToastId = showLoadingToast('Cargando usuarios...');
      try {
        const data = await getUsers();
        setUsers(data);
      } finally {
        dismissToast(loadingToastId);
      }
    };
    loadUsers();
  }, []);

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const openCreateModal = (user) => {
    setSelectedUser(user);
    setIsCreateModalOpen(true);
  };

  const closeModals = () => {
    setSelectedUser(null);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsCreateModalOpen(false);
  };

  const handleSaveEdit = async (updatedUser) => {
    const loadingToastId = showLoadingToast('Guardando cambios...');
  
    try {
      const payload = {
        first_name: updatedUser.first_name,
        last_name: updatedUser.last_name,
        email: updatedUser.email || null,
        is_active: updatedUser.is_active,
        is_staff: updatedUser.is_staff,
        role_id: updatedUser.role_id,
      };
  
      await updateUser(updatedUser.id, payload);
  
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === updatedUser.id ? { ...user, ...payload, id: user.id } : user
        )
      );
    } catch (error) {
      console.error('Error al actualizar el usuario:', error.response?.data || error.message);
    } finally {
      dismissToast(loadingToastId);
      closeModals();
    }
  };
  

  const handleConfirmDelete = async (userToDelete) => {
    const loadingToastId = showLoadingToast('Eliminando usuario...');
    try {
      // Llamada al API para eliminar
      await deleteUser(userToDelete.id);
      
      // Actualizar la lista local de usuarios eliminando el usuario borrado
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userToDelete.id));
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    } finally {
      dismissToast(loadingToastId);
      closeModals();
    }
  };

  return (
    <>
      <UsersTable 
        users={users} 
        onEdit={openEditModal} 
        onDelete={openDeleteModal} 
        onCreate={openCreateModal} 
      />
      <EditUserModal 
        isOpen={isEditModalOpen} 
        onClose={closeModals} 
        user={selectedUser} 
        onSave={handleSaveEdit} 
      />
      <DeleteUserModal 
        isOpen={isDeleteModalOpen} 
        onClose={closeModals} 
        user={selectedUser} 
        onConfirm={handleConfirmDelete} 
      />
      <CreateUserModal 
        isOpen={isCreateModalOpen}
        onClose={closeModals}
        onUserCreated={() => {
          const loadUsers = async () => {
            const loadingToastId = showLoadingToast('Cargando usuarios...');
            try {
              const data = await getUsers();
              setUsers(data);
            } finally {
              dismissToast(loadingToastId);
            }
          };
          loadUsers();
        }}
      />
    </>
  );
};

export default UsersPage;

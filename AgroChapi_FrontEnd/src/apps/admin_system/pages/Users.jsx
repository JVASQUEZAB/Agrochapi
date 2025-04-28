import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/UserService';
import { showLoadingToast, dismissToast } from '../../../lib/toast';
import UsersTable from '../components/users/UsersTable';
import EditUserModal from '../components/users/EditUserModal';
import DeleteUserModal from '../components/users/DeleteUserModal';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  const closeModals = () => {
    setSelectedUser(null);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleSaveEdit = (updatedUser) => {
    console.log('Guardar cambios de', updatedUser);
    closeModals();
  };

  const handleConfirmDelete = (userToDelete) => {
    console.log('Eliminar a', userToDelete);
    closeModals();
  };

  return (
    <>
      <UsersTable users={users} onEdit={openEditModal} onDelete={openDeleteModal} />
      <EditUserModal isOpen={isEditModalOpen} onClose={closeModals} user={selectedUser} onSave={handleSaveEdit} />
      <DeleteUserModal isOpen={isDeleteModalOpen} onClose={closeModals} user={selectedUser} onConfirm={handleConfirmDelete} />
    </>
  );
};

export default UsersPage;

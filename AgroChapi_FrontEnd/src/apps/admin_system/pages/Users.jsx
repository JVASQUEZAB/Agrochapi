import React from 'react';
import { useUsers } from '../hooks/useUsers';
import UsersTable from '../components/users/UsersTable';
import EditUserModal from '../components/users/EditUserModal';
import DeleteUserModal from '../components/users/DeleteUserModal';
import CreateUserModal from '../components/users/CreateUserModal';
import Spinner from '../../../components/common/Spinner'; // Te ayudare a crearlo

const UsersPage = () => {
  const {
    users,
    loading,
    create,
    update,
    remove,
  } = useUsers();

  const [selectedUser, setSelectedUser] = React.useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const openCreateModal = () => {
    setSelectedUser(null);
    setIsCreateModalOpen(true);
  };

  const closeModals = () => {
    setSelectedUser(null);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsCreateModalOpen(false);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
            onSave={(userData) => update(userData.id, userData).then(closeModals)}
          />

          <DeleteUserModal
            isOpen={isDeleteModalOpen}
            onClose={closeModals}
            user={selectedUser}
            onConfirm={() => remove(selectedUser.id).then(closeModals)}
          />

          <CreateUserModal
            isOpen={isCreateModalOpen}
            onClose={closeModals}
            onUserCreated={(userData) => create(userData).then(closeModals)}
          />
        </>
      )}
    </>
  );
};

export default UsersPage;

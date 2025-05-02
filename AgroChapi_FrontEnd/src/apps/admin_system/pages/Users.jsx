import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { Box } from '@mui/material';
import UsersTable from '../components/users/UsersTable';
import EditUserModal from '../components/users/EditUserModal';
import DeleteUserModal from '../components/users/DeleteUserModal';
import CreateUserModal from '../components/users/CreateUserModal';
import Spinner from '../../../components/common/Spinner';
import CreateUserButton from '../components/users/CreateUserButton';
import UserBulkUploadButton from '../components/users/UserBulkUploadButton';
import UserBulkUploadModal from '../components/users/UserBulkUploadModal';

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
  const [isBulkModalOpen, setIsBulkModalOpen] = React.useState(false);

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
    setIsBulkModalOpen(false);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex justify-between items-center mb-4 mx-8">
            <h1 className="text-xl font-bold">Usuarios</h1>
            <Box display="flex" gap={2}>
              <CreateUserButton onClick={openCreateModal} />
              <UserBulkUploadButton onClick={() => setIsBulkModalOpen(true)} />
            </Box>
          </div>

          <UsersTable
            users={users}
            onEdit={openEditModal}
            onDelete={openDeleteModal}
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

          <UserBulkUploadModal
            open={isBulkModalOpen}
            onClose={closeModals}
          />
        </>
      )}
    </>
  );
};

export default UsersPage;

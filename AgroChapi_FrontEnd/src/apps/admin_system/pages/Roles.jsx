import { useState } from 'react';
import { Box } from '@mui/material';
import Spinner from '../../../components/common/Spinner';
import { usePermissionsMatrix } from '../hooks/usePermissionsMatrix';
import PermissionsMatrixTable from '../components/roles/PermissionsMatrixTable';
import SaveButton from '../components/roles/SaveButton';
import CreateRoleButton from '../components/roles/CreateRoleButton';
import CreateRoleModal from '../components/roles/CreateRoleModal';
import EditRoleModal from '../components/roles/EditRoleModal';
import DeleteRoleModal from '../components/roles/DeleteRoleModal';
import API from '../../../api/axios';
import { showToast } from '../../../lib/toast';

const PermissionsPage = () => {
  const {
    roles,
    modules,
    loading,
    modifiedPermissions,
    handleCheckboxChange,
    saveChanges,
    fetchData,
  } = usePermissionsMatrix();

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleCreateRole = async (newRole) => {
    try {
      await API.post('core/roles/', newRole);
      showToast('success', 'Rol creado correctamente');
      setCreateModalOpen(false);
      await fetchData();
    } catch (err) {
      console.error(err);
      showToast('error', 'Error al crear el rol');
    }
  };

  const handleEditRole = async (updatedRole) => {
    try {
      await API.put(`core/roles/${selectedRole.role}/`, updatedRole);
      showToast('success', 'Rol actualizado correctamente');
      setEditModalOpen(false);
      await fetchData();
    } catch (err) {
      console.error(err);
      showToast('error', 'Error al actualizar el rol');
    }
  };

  const handleDeleteRole = async (role) => {
    try {
      await API.delete(`core/roles/${role.role}/`);
      showToast('success', 'Rol eliminado correctamente');
      setDeleteModalOpen(false);
      await fetchData();
    } catch (err) {
      console.error(err);
      showToast('error', 'Error al eliminar el rol');
    }
  };

  if (loading) return <Spinner />;

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} mx={1}>
        <h1 className="text-xl font-bold">Roles y Permisos</h1>
        <Box display="flex" gap={2}>
          <SaveButton onClick={saveChanges} disabled={modifiedPermissions.length === 0} />
          <CreateRoleButton onClick={() => setCreateModalOpen(true)} />
        </Box>
      </Box>

      <PermissionsMatrixTable
        columns={modules}
        data={roles}
        loading={loading}
        onCheckboxChange={handleCheckboxChange}
        onEdit={(role) => {
          setSelectedRole(role);
          setEditModalOpen(true);
        }}
        onDelete={(role) => {
          setSelectedRole(role);
          setDeleteModalOpen(true);
        }}
      />

      <CreateRoleModal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreate={handleCreateRole}
      />

      <EditRoleModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onEdit={handleEditRole}
        role={selectedRole}
      />

      <DeleteRoleModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteRole}
        role={selectedRole}
      />
    </>
  );
};

export default PermissionsPage;

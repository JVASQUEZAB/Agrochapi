// src/apps/admin_system/components/users/UserBulkUploadModal.jsx
import React from 'react';
import BulkUploadModal from '../../../../common/bulkUpload/BulkUploadModal';
import { createValidateUserTemplate } from '../../../../common/bulkUpload/modules/admin/users/validateUserTemplate';

const UserBulkUploadModal = ({ open, onClose, existingUsers, roles, onSubmit }) => {
  // No renderizar si faltan datos necesarios
  if (!existingUsers?.length || !roles?.length) return null;;

  // Extraemos DNIs existentes
  const existingDnis = existingUsers.map(user => user.dni);

  // Generamos función validadora
  const validateTemplate = createValidateUserTemplate(existingDnis, roles);

  return (
    <BulkUploadModal
      isOpen={open}
      onClose={onClose}
      title="Carga masiva de usuarios"
      templateHeaders={['dni', 'first_name', 'last_name', 'email', 'role_name']}
      existingData={existingUsers.map(user => ({
        dni: user.dni,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role_name: roles.find(r => r.id === user.role_id)?.name || '',
      }))}
      filename="usuarios"
      validateTemplate={validateTemplate}
      onSubmit={onSubmit}
    />
  );
};

export default UserBulkUploadModal;

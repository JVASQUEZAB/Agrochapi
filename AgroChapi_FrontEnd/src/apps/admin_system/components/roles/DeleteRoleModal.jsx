import React from 'react';
import Modal from '../../../../components/ui/Modal';

const DeleteRoleModal = ({ isOpen, onClose, role, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Eliminar Rol"
      confirmText="Eliminar"
      confirmColor="red"
      onConfirm={() => onConfirm(role)}
    >
      <p className="text-red-500">
        ¿Seguro que deseas eliminar el rol <strong>{role?.role_name}</strong>? Esta acción eliminará también sus permisos.
      </p>
    </Modal>
  );
};

export default DeleteRoleModal;

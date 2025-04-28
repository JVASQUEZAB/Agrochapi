import React from 'react';
import Modal from '../../../../components/ui/Modal';

const DeleteUserModal = ({ isOpen, onClose, user, onConfirm }) => {  // <-- agregar onConfirm
  return (
    <Modal 
        isOpen={isOpen}
        onClose={onClose}
        title="Eliminar Usuario"
        confirmText="Eliminar"
        cancelText="Cancelar"
        confirmColor="red"
        onConfirm={() => onConfirm(user)}  // <-- PASAR onConfirm correctamente
    >
      <div className="space-y-4">
        <p>¿Seguro que deseas eliminar a <strong>{user?.first_name} {user?.last_name}</strong>?</p>
      </div>
    </Modal>
  );
};

export default DeleteUserModal;

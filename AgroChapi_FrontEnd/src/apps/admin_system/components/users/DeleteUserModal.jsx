import React from 'react';
import Modal from '../../../../components/ui/Modal';

const DeleteUserModal = ({ isOpen, onClose, user, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirmar Eliminación">
      <div className="space-y-4">
        <p>¿Seguro que deseas eliminar a <strong>{user?.first_name} {user?.last_name}</strong>?</p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancelar</button>
          <button onClick={() => onConfirm(user)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Eliminar</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteUserModal;

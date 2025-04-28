import React from 'react';
import Modal from '../../../../components/ui/Modal';

const EditUserModal = ({ isOpen, onClose, user, onSave }) => {
  const handleChange = (field, value) => {
    onSave({ ...user, [field]: value });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Editar Usuario">
      <div className="space-y-4">
        <input
          type="text"
          value={user?.first_name || ''}
          onChange={(e) => handleChange('first_name', e.target.value)}
          placeholder="Nombre"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={user?.last_name || ''}
          onChange={(e) => handleChange('last_name', e.target.value)}
          placeholder="Apellido"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          value={user?.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancelar</button>
          <button onClick={() => onSave(user)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Guardar</button>
        </div>
      </div>
    </Modal>
  );
};

export default EditUserModal;

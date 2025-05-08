import React, { useState, useEffect } from 'react';
import Modal from '../../../../components/ui/Modal';

const EditRoleModal = ({ isOpen, onClose, onEdit, role }) => {
  const [formData, setFormData] = useState({ name: '', hierarchy: '' });

  useEffect(() => {
    if (role) {
      setFormData({ name: role.role_name, hierarchy: role.hierarchy });
    }
  }, [role]);

  const handleSubmit = () => {
    onEdit({ ...formData });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Editar Rol"
      confirmText="Guardar"
      onConfirm={handleSubmit}
    >
      <div className="space-y-4">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Nombre del rol"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          className="w-full border p-2 rounded"
          placeholder="Jerarquía"
          value={formData.hierarchy}
          onChange={(e) => setFormData({ ...formData, hierarchy: e.target.value })}
        />
      </div>
    </Modal>
  );
};

export default EditRoleModal;

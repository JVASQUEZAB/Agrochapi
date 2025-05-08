import React, { useState } from 'react';
import Modal from '../../../../components/ui/Modal';

const CreateRoleModal = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({ name: '', hierarchy: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Nombre requerido';
    if (!formData.hierarchy || isNaN(formData.hierarchy)) errs.hierarchy = 'Jerarquía válida requerida';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleConfirm = () => {
    if (validate()) {
      onCreate({ ...formData, hierarchy: parseInt(formData.hierarchy, 10) });
      setFormData({ name: '', hierarchy: '' });
      setErrors({});
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      title="Crear Nuevo Rol"
      confirmText="Crear"
      confirmColor="green"
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className="block font-semibold">Nombre</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block font-semibold">Jerarquía</label>
          <input
            type="number"
            value={formData.hierarchy}
            onChange={(e) => setFormData({ ...formData, hierarchy: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.hierarchy && <p className="text-red-500 text-sm">{errors.hierarchy}</p>}
        </div>
      </div>
    </Modal>
  );
};

export default CreateRoleModal;

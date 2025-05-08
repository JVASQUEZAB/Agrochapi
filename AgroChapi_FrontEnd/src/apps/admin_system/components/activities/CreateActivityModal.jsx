import React, { useState } from 'react';
import Modal from '../../../../components/ui/Modal'; // Ajusta la ruta si es necesario

const CreateActivityModal = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({ codigo: '', descripcion: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.codigo.trim()) errs.codigo = 'Código requerido';
    if (!formData.descripcion.trim()) errs.descripcion = 'Descripción requerida';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleConfirm = () => {
    if (validate()) {
      onCreate({
        ...formData,
        codigo: formData.codigo.trim().toUpperCase(),
        descripcion: formData.descripcion.trim(),
        is_active: true
      });
      setFormData({ codigo: '', descripcion: '' });
      setErrors({});
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      title="Crear Nueva Actividad"
      confirmText="Crear"
      confirmColor="green"
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className="block font-semibold">Código</label>
          <input
            type="text"
            value={formData.codigo}
            maxLength={3}
            onChange={(e) => setFormData({ ...formData, codigo: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 uppercase"
          />
          {errors.codigo && <p className="text-red-500 text-sm">{errors.codigo}</p>}
        </div>
        <div>
          <label className="block font-semibold">Descripción</label>
          <input
            type="text"
            value={formData.descripcion}
            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.descripcion && <p className="text-red-500 text-sm">{errors.descripcion}</p>}
        </div>
      </div>
    </Modal>
  );
};

export default CreateActivityModal;

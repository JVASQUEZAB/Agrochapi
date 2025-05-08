import React, { useState, useEffect } from 'react';
import Modal from '../../../../components/ui/Modal';
import { useRoles } from '../../hooks/useRoles'; // Usa tu hook de roles
import { showToast } from '../../../../lib/toast';

const initialForm = {
  dni: '',
  first_name: '',
  last_name: '',
  email: '',
  role: '',
};

const CreateUserModal = ({ isOpen, onClose, onUserCreated }) => {
  const { roles, fetchRoles } = useRoles();
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchRoles();
      setFormData(initialForm);
    }
  }, [isOpen, fetchRoles]);

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: field === 'role' ? (value === '' ? null : parseInt(value)) : value,
    });
  };

  const handleSubmit = async () => {
    const { dni, first_name, last_name, role } = formData;
    if (!dni || !first_name || !last_name || !role) {
      showToast('error', 'Por favor, complete todos los campos obligatorios');
      return;
    }

    const payload = {
      dni,
      first_name,
      last_name,
      email: formData.email || null,
      role_id: role,
      password: dni,
      is_active: true,
      is_staff: false,
    };

    setIsSubmitting(true);
    try {
      await onUserCreated(payload);
      onClose();
    } catch (error) {
      console.error('Error al crear usuario desde el modal:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Crear Usuario"
      confirmText="Crear"
      cancelText="Cancelar"
      confirmColor="green"
      onConfirm={handleSubmit}
      loading={isSubmitting}
    >
      <div className="space-y-4">
        <input
          type="text"
          value={formData.dni}
          onChange={(e) => handleChange('dni', e.target.value)}
          placeholder="DNI"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={formData.first_name}
          onChange={(e) => handleChange('first_name', e.target.value)}
          placeholder="Nombre"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={formData.last_name}
          onChange={(e) => handleChange('last_name', e.target.value)}
          placeholder="Apellido"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="Email (opcional)"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <select
          value={formData.role || ''}
          onChange={(e) => handleChange('role', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        >
          <option value="">Seleccione un rol</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
    </Modal>
  );
};

export default CreateUserModal;

import React, { useState, useEffect } from 'react';
import Modal from '../../../../components/ui/Modal';
import API from '../../../../api/axios';

const CreateUserModal = ({ isOpen, onClose, onUserCreated }) => {
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({
    dni: '',
    first_name: '',
    last_name: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await API.get('core/roles/');
        setRoles(response.data);
      } catch (error) {
        console.error('Error al cargar roles:', error);
      }
    };

    if (isOpen) {
      fetchRoles();
      setFormData({
        dni: '',
        first_name: '',
        last_name: '',
        email: '',
        role: '',
      });
    }
  }, [isOpen]);

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: field === 'role' ? (value === '' ? null : parseInt(value)) : value,
    });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        dni: formData.dni,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email || null,
        role_id: formData.role,
        password: formData.dni,
        is_active: true,
        is_staff: false,
      };
      console.log('Tipo de role:', typeof formData.role);
      console.log('Payload:', payload); // Verifica el payload antes de enviarlo

      await API.post('core/users/', payload);
      if (onUserCreated) {
        onUserCreated(); // Recarga lista de usuarios
      }
      onClose();
    } catch (error) {
      console.error('Error al crear usuario:', error);
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
      onConfirm={handleSubmit} // <---- AQUÍ conectamos
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
          value={formData.role}
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

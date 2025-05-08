import React, { useEffect, useState } from 'react';
import Modal from '../../../../components/ui/Modal';
import API from '../../../../api/axios';

const EditUserModal = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    is_active: true,
    is_staff: false,
    role_id: '', // Aquí guardamos el ID del rol
  });
  
  const [roles, setRoles] = useState([]);

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
    }
  }, [isOpen]);

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        is_active: user.is_active ?? true,
        is_staff: user.is_staff ?? false,
        role_id: user.role?.id || '', // Safe access
      });
    }
  }, [user]);

  useEffect(() => {
    if (!isOpen) {
      // Reset form cuando se cierra el modal
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        is_active: true,
        is_staff: false,
        role_id: '',
      });
      setRoles([]); // Limpiamos los roles también
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    // Preparamos solo lo necesario para actualizar
    const updatedUser = {
      ...formData,
      id: user.id, // Necesitamos pasar el id para updateUser
    };
    onSave(updatedUser);
  };

  return (
    <Modal 
      isOpen={isOpen}
      onClose={onClose}
      title="Editar Usuario"
      confirmText="Guardar"
      cancelText="Cancelar"
      confirmColor="blue"
      onConfirm={handleSave}
    >
      <div className="space-y-4">
        <div className='flex gap-4'>
            <input
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <input
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Apellido"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            />
        </div>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <div className='flex items-center ps-3 gap 4'>
            <div>
              <label>
                  <input
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleChange}
                  />
                  Activo
              </label>
            </div>
            <div>
              <label>
                  <input
                  type="checkbox"
                  name="is_staff"
                  checked={formData.is_staff}
                  onChange={handleChange}
                  />
                  Es Staff
              </label>
            </div>
        </div>
        <div>
          <label>Rol</label>
          <select
            name="role_id"
            value={formData.role_id}
            onChange={handleChange}
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
      </div>
    </Modal>
  );
};

export default EditUserModal;

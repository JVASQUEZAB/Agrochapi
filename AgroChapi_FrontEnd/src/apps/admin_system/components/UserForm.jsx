import React from 'react';

const UserForm = ({ userData, onChange, onSubmit, isEditing }) => {
  return (
    <div>
      <h2>{isEditing ? 'Editar Usuario' : 'Crear Usuario'}</h2>
      <input 
        type="text" 
        placeholder="Primer nombre" 
        value={userData.first_name} 
        onChange={e => onChange('first_name', e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Apellido" 
        value={userData.last_name} 
        onChange={e => onChange('last_name', e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Correo" 
        value={userData.email} 
        onChange={e => onChange('email', e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Rol" 
        value={userData.role} 
        onChange={e => onChange('role', e.target.value)} 
      />
      <button onClick={onSubmit}>{isEditing ? 'Actualizar' : 'Crear'} Usuario</button>
    </div>
  );
};

export default UserForm;

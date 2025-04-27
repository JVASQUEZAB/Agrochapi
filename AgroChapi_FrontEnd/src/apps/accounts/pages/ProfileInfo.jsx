// apps/accounts/components/UserProfileDetails.jsx
import React, { useEffect, useState } from 'react';
import API from '../../../api/axios';
import { showToast, showLoadingToast, dismissToast } from '../../../lib/toast';

const UserProfileDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const toastId = showLoadingToast('Cargando información del perfil...');
      try {
        const response = await API.get('account/me/');
        setUser(response.data);
        dismissToast(toastId);
      } catch (error) {
        console.error('Error al cargar datos del usuario:', error);
        dismissToast(toastId);
        showToast('error', 'Error al cargar perfil', 'No se pudo obtener la información del usuario');
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return null; // o un loader si prefieres
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('es-PE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, // formato 24 horas
    });
  };

  return (
    <div className="max-w-100% mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Información del perfil</h2>
      <br/>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-gray-700">

        <div>
          <span className="font-semibold">DNI:</span>
          <p>{user.dni || '—'}</p>
        </div>

        <div>
          <span className="font-semibold">Correo:</span>
          <p>{user.email || '—'}</p>
        </div>

        <div>
          <span className="font-semibold">Nombres:</span>
          <p>{user.first_name || '—'}</p>
        </div>

        <div>
          <span className="font-semibold">Apellidos:</span>
          <p>{user.last_name || '—'}</p>
        </div>

        
        <div>
          <span className="font-semibold">Rol:</span>
          <p>{user.role || '—'}</p>
        </div>

        <div>
          <span className="font-semibold">Estado:</span>
          <p className={user.is_active ? 'text-green-600' : 'text-red-600'}>
            {user.is_active ? 'Activo' : 'Inactivo'}
          </p>
        </div>

        <div>
          <span className="font-semibold">Staff:</span>
          <p>{user.is_staff ? 'Sí' : 'No'}</p>
        </div>

        <div>
          <span className="font-semibold">Fecha de creación:</span>
          <p>{formatDate(user.date_joined)}</p>
        </div>
        <div>
          <span className="font-semibold">Última vez que inició sesión:</span>
          <p>{formatDate(user.last_login)}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetails;

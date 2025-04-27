import React, { useEffect, useState } from 'react';
import API from '../../../api/axios';
import { Pencil } from 'lucide-react';

const UserInfoHeader = () => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    role: '',
    profile_image: '',
  });

  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await API.get('account/me/');
        setUser(response.data);
      } catch (error) {
        console.error('Error al cargar usuario:', error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col items-center text-center space-y-4 relative">
      {/* Imagen de perfil con ícono de lápiz */}
      <div className="relative group cursor-pointer" onClick={() => setShowPreview(true)}>
        <img
          src={user.profile_image || '/profile.jpg'}
          alt="Avatar"
          className="w-80 h-80 rounded-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md group-hover:scale-110 transition">
          <Pencil size={16} className="text-gray-600" />
        </div>
      </div>

      {/* Nombre y rol */}
      <div className="w-full">
        <h2 className="text-4xl font-semibold">{user.first_name} {user.last_name}</h2>
        <p className="text-gray-500 text-2xl">{user.role || 'Rol no asignado'}</p>
      </div>

      {/* Modal de previsualización de imagen */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-md w-full">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500"
            >
              ✕
            </button>
            <img
              src={user.profile_image || '/profile.jpg'}
              alt="Preview"
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfoHeader;

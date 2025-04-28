import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/UserService';
import { showLoadingToast, dismissToast } from '../../../lib/toast';
import dayjs from 'dayjs';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


  useEffect(() => {
    const loadUsers = async () => {
      const loadingToastId = showLoadingToast('Cargando usuarios...');
      try {
        const data = await getUsers();
        setUsers(data);
      } finally {
        dismissToast(loadingToastId);
      }
    };

    loadUsers();
  }, []);

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };
  
  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };
  
  const closeModals = () => {
    setSelectedUser(null);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleSaveEdit = (user) => {
    // Lógica para guardar la edición
    console.log('Guardar cambios de', user);
    closeModals();
  };
  
  const handleConfirmDelete = (user) => {
    // Lógica para confirmar eliminación
    console.log('Eliminar a', user);
    closeModals();
  };
  
  

  const formatDate = (date) => {
    return date ? dayjs(date).format('DD-MMM') : '';
  };

  return (
    <>
      {isEditModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#00000050]">
          <div className="bg-white p-6 rounded shadow-md w-96 min-h-[300px]">
            <h2 className="text-xl font-bold mb-4">Editar Usuario</h2>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                value={selectedUser?.first_name || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, first_name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">Apellido</label>
              <input
                type="text"
                value={selectedUser?.last_name || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, last_name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={selectedUser?.email || ''}
                onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={closeModals}
                className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleSaveEdit(selectedUser)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}


      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-xl font-bold mb-4 text-red-600">Confirmar Eliminación</h2>
            <p className="mb-4">¿Seguro que deseas eliminar a {selectedUser?.first_name} {selectedUser?.last_name}?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModals}
                className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleConfirmDelete(selectedUser)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border border-gray-300">DNI</th>
              <th className="p-2 border border-gray-300">Nombre</th>
              <th className="p-2 border border-gray-300">Apellido</th>
              <th className="p-2 border border-gray-300">Email</th>
              <th className="p-2 border border-gray-300">Rol</th>
              <th className="p-2 border border-gray-300">Activo</th>
              <th className="p-2 border border-gray-300">Staff</th>
              <th className="p-2 border border-gray-300">Último Login</th>
              <th className="p-2 border border-gray-300">Fecha Registro</th>
              <th className="p-2 border border-gray-300">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-2 border border-gray-300">{user.dni}</td>
                <td className="p-2 border border-gray-300">{user.first_name}</td>
                <td className="p-2 border border-gray-300">{user.last_name}</td>
                <td className="p-2 border border-gray-300">{user.email}</td>
                <td className="p-2 border border-gray-300">{user.role?.name || ''}</td>
                <td className="p-2 border border-gray-300 text-center">
                  <input type="checkbox" disabled checked={user.is_active} />
                </td>
                <td className="p-2 border border-gray-300 text-center">
                  <input type="checkbox" disabled checked={user.is_staff} />
                </td>
                <td className="p-2 border border-gray-300">{formatDate(user.last_login)}</td>
                <td className="p-2 border border-gray-300">{formatDate(user.date_joined)}</td>
                <td className="p-2 border border-gray-300 flex gap-2 justify-center">
                  <button
                    onClick={() => openEditModal(user)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => openDeleteModal(user)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersPage;

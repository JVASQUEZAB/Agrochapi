import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
            <th className="px-6 py-3 border-b">DNI</th>
            <th className="px-6 py-3 border-b">Nombre</th>
            <th className="px-6 py-3 border-b">Correo</th>
            <th className="px-6 py-3 border-b">Rol</th>
            <th className="px-6 py-3 border-b">Activo</th>
            <th className="px-6 py-3 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
              <td className="px-6 py-4 border-b text-sm text-gray-900">{user.dni}</td>
              <td className="px-6 py-4 border-b text-sm text-gray-900">
                {user.first_name} {user.last_name}
              </td>
              <td className="px-6 py-4 border-b text-sm text-gray-900">{user.email}</td>
              <td className="px-6 py-4 border-b text-sm text-gray-900">{user.role.name}</td>
              <td className="px-6 py-4 border-b text-sm text-gray-900">{user.is_active}</td>
              <td className="px-6 py-4 border-b text-sm text-gray-900 flex items-center space-x-2">
                <button
                  onClick={() => onEdit(user.id)}
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

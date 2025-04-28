import React from 'react';
import dayjs from 'dayjs';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


const UsersTable = ({ users, onEdit, onDelete, onCreate }) => {
  const formatDate = (date) => date ? dayjs(date).format('DD-MMM') : '';

  return (
    <div className="p-4">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Usuarios</h1>
            <button 
                onClick={() => onCreate(true)} 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
            Crear Usuario
            </button>
        </div>
      <table className="w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100 text-sm font-semibold text-gray-700">
          <tr>
            <th className="p-2 border">DNI</th>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Apellido</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Rol</th>
            <th className="p-2 border">Activo</th>
            <th className="p-2 border">Staff</th>
            <th className="p-2 border">Último Login</th>
            <th className="p-2 border">Fecha Registro</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-50 text-sm">
              <td className="p-2 border">{user.dni}</td>
              <td className="p-2 border">{user.first_name}</td>
              <td className="p-2 border">{user.last_name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.role?.name || ''}</td>
              <td className="p-2 border text-center"><input type="checkbox" checked={user.is_active} readOnly /></td>
              <td className="p-2 border text-center"><input type="checkbox" checked={user.is_staff} readOnly /></td>
              <td className="p-2 border">{formatDate(user.last_login)}</td>
              <td className="p-2 border">{formatDate(user.date_joined)}</td>
              <td className="p-2 border gap-2 justify-center">
                <div className='flex gap-2 justify-center'>
                    <button onClick={() => onEdit(user)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        <FaEdit className='text-sm'/>
                    </button>
                    <button onClick={() => onDelete(user)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        <MdDeleteForever />
                    </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

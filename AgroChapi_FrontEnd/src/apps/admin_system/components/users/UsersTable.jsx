import React from 'react';
import CustomTable from '../../../../components/ui/DataTable';
import { getUserColumns } from '../tables/usersColumns';

const UsersTable = ({ users, onEdit, onDelete, onCreate }) => {
  const columns = getUserColumns(onEdit, onDelete);

  return (
    <div>
      <div className="flex justify-between items-center mb-4 mx-8">
        <h1 className="text-xl font-bold">Usuarios</h1>
        <button
          onClick={() => onCreate(true)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Crear Usuario
        </button>
      </div>
      <CustomTable columns={columns} data={users} />
    </div>
  );
};

export default UsersTable;

import React from 'react';
import CustomTable from '../../../../components/ui/DataTable';
import { getUserColumns } from './UsersColumns';

const UsersTable = ({ users, onEdit, onDelete }) => {
  const columns = getUserColumns(onEdit, onDelete);

  return <CustomTable columns={columns} data={users} />;
};

export default UsersTable;

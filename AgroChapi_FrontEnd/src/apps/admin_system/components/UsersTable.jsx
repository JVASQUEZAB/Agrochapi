// src/apps/admin_system/components/UsersTable.jsx
import React, { useEffect, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { getUsers, deleteUser } from '@/apps/admin_system/services/usersService';
import { Checkbox, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error al cargar usuarios', error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      await deleteUser(id);
      fetchUsers(); // recargar usuarios
    }
  };

  const columns = [
    { accessorKey: 'id', header: 'ID', size: 50 },
    { accessorKey: 'dni', header: 'DNI' },
    { accessorKey: 'first_name', header: 'Nombre' },
    { accessorKey: 'last_name', header: 'Apellido' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'role.name', header: 'Rol' },
    {
      accessorKey: 'is_active',
      header: 'Activo',
      Cell: ({ cell }) => (
        <Checkbox checked={cell.getValue()} disabled />
      ),
    },
    {
      accessorKey: 'is_staff',
      header: 'Staff',
      Cell: ({ cell }) => (
        <Checkbox checked={cell.getValue()} disabled />
      ),
    },
    {
      accessorKey: 'date_joined',
      header: 'Fecha de Registro',
      Cell: ({ cell }) => (
        <span>{new Date(cell.getValue()).toLocaleDateString('es-PE', { day: '2-digit', month: 'short' })}</span>
      ),
    },
    {
      accessorKey: 'last_login',
      header: 'Último Login',
      Cell: ({ cell }) => (
        <span>{new Date(cell.getValue()).toLocaleDateString('es-PE', { day: '2-digit', month: 'short' })}</span>
      ),
    },
    {
      id: 'acciones',
      header: 'Acciones',
      Cell: ({ row }) => (
        <>
          <IconButton color="primary" onClick={() => console.log('Editar', row.original)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(row.original.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
      size: 120,
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={users}
      enableRowActions={false}
      enableColumnActions={false}
    />
  );
};

export default UsersTable;

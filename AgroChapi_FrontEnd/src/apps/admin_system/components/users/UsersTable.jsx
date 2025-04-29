import React from 'react';
import dayjs from 'dayjs';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { MaterialReactTable } from 'material-react-table';
import { Button } from '@mui/material';

const UsersTable = ({ users, onEdit, onDelete, onCreate }) => {
  
  const formatDate = (date) => date ? dayjs(date).format('DD-MMM') : '';

  const columns = [
    { accessorKey: 'dni', header: 'DNI' },
    { accessorKey: 'first_name', header: 'Nombre' },
    { accessorKey: 'last_name', header: 'Apellido' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'role.name', header: 'Rol' },
    { 
      accessorKey: 'is_active', 
      header: 'Activo',
      Cell: ({ cell }) => (
        <input type="checkbox" checked={cell.getValue()} readOnly />
      )
    },
    { 
      accessorKey: 'is_staff', 
      header: 'Staff',
      Cell: ({ cell }) => (
        <input type="checkbox" checked={cell.getValue()} readOnly />
      )
    },
    { 
      accessorKey: 'last_login', 
      header: 'Último Login',
      Cell: ({ cell }) => formatDate(cell.getValue())
    },
    { 
      accessorKey: 'date_joined', 
      header: 'Fecha Registro',
      Cell: ({ cell }) => formatDate(cell.getValue())
    },
    {
      header: 'Acciones',
      Cell: ({ row }) => (
        <div className="flex gap-2 justify-center">
          <Button 
            size="small" 
            variant="contained" 
            color="primary" 
            onClick={() => onEdit(row.original)}
          >
            <FaEdit size={16} />
          </Button>
          <Button 
            size="small" 
            variant="contained" 
            color="error" 
            onClick={() => onDelete(row.original)}
          >
            <MdDeleteForever size={18} />
          </Button>
        </div>
      ),
    }
  ];

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Usuarios</h1>
        <button 
          onClick={() => onCreate(true)} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Crear Usuario
        </button>
      </div>
      <MaterialReactTable
        columns={columns}
        data={users}
        enableGlobalFilter
        muiTablePaperProps={{
          elevation: 2,
          sx: {
            borderRadius: '5px',
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: '#3b82f6',
            color: '#fff',
            fontWeight: 'light',
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            backgroundColor: '#f9fafb',
          },
        }}
        initialState={{
          pagination: { pageSize: 10 },
          density: 'comfortable',
          showGlobalFilter: true, // Mostrar barra de búsqueda
        }}
        muiSearchTextFieldProps={{
          variant: 'outlined',
          placeholder: 'Buscar...',
          sx: { width: '300px' },
        }}
      />
    </div>
  );
};

export default UsersTable;

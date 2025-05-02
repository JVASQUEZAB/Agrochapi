import dayjs from 'dayjs';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Button } from '@mui/material';
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export const getUserColumns = (onEdit, onDelete) => [
  { accessorKey: 'dni', header: 'DNI' },
  { accessorKey: 'first_name', header: 'Nombre' },
  { accessorKey: 'last_name', header: 'Apellido' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role.name', header: 'Rol' },
  {
    accessorKey: 'is_active',
    header: 'Activo',
    Cell: ({ cell }) => <input type="checkbox" checked={cell.getValue()} readOnly />,
  },
  {
    accessorKey: 'is_staff',
    header: 'Staff',
    Cell: ({ cell }) => <input type="checkbox" checked={cell.getValue()} readOnly />,
  },
  {
    accessorKey: 'last_login',
    header: 'Último Login',
    Cell: ({ cell }) => {
      const value = cell.getValue();
      return value ? dayjs(value).format('DD-MMM') : '';
    },
  },
  {
    accessorKey: 'date_joined',
    header: 'Registro',
    Cell: ({ cell }) => {
      const value = cell.getValue();
      return value ? dayjs(value).format('DD-MMM') : '';
    },
  },
  {
    header: 'Acciones',
    id: 'actions',
    Cell: ({ row }) => (
      <div className="flex gap-2 justify-center">
        <Tooltip title="Editar Usuario">
          <IconButton onClick={() => onEdit(row.original)} size="small">
            <EditIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar Usuario">
          <IconButton onClick={() => onDelete(row.original)} size="small" color="error">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
    ),
    size: 120,
  },
];

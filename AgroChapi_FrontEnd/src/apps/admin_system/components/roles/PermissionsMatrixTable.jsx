import React from 'react';
import CustomTable from '../../../../components/ui/DataTable';
import { Checkbox, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PermissionsMatrixTable = ({ columns, data, onCheckboxChange, loading, onEdit, onDelete }) => {
  const tableColumns = [
    {
      accessorKey: 'role_name',
      header: 'Rol',
      enableSorting: false,
      size: 180,
    },
    ...columns.map((mod) => ({
      accessorKey: mod.module_name,
      header: mod.module_name,
      Cell: ({ cell }) => (
        <Checkbox
          checked={!!cell.getValue()}
          onChange={() => onCheckboxChange(cell.row.original.role, mod.module, !cell.getValue())}
        />
      ),
      size: 100,
    })),
    {
      id: 'actions',
      header: 'Acciones',
      Cell: ({ row }) => (
        <div className="flex gap-2">
          <Tooltip title="Editar Rol">
            <IconButton onClick={() => onEdit(row.original)} size="small">
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar Rol">
            <IconButton onClick={() => onDelete(row.original)} size="small" color="error">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      ),
      size: 120,
    },
  ];

  return (
    <CustomTable columns={tableColumns} data={data} state={{ isLoading: loading }} />
  );
};

export default PermissionsMatrixTable;

export const getWorksColumns = () => [
  {
    accessorKey: 'actividad_detalle.codigo',
    header: 'Código Actividad',
    accessorFn: (row) => row.actividad_detalle?.codigo ?? '',
  },
  {
    accessorKey: 'actividad_detalle.descripcion',
    header: 'Descripción Actividad',
    accessorFn: (row) => row.actividad_detalle?.descripcion ?? '',
  },
  { accessorKey: 'codigo', header: 'Código Labor' },
  { accessorKey: 'descripcion', header: 'Descripción Labor' },
  {
    accessorKey: 'is_active',
    header: 'Activo',
    Cell: ({ cell }) => <input type="checkbox" checked={cell.getValue()} readOnly />,
  },
];
export const getActivityColumns = () => [
    {accessorKey: 'codigo', header: 'Codigo Actividad'},
    {accessorKey: 'descripcion', header: 'Descripción Actividad'},
    {
        accessorKey: 'is_active',
        header: 'Activo',
        Cell: ({ cell }) => <input type="checkbox" checked={cell.getValue()} readOnly />,
    },
]
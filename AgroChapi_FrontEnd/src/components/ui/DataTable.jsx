import React from 'react';
import MaterialReactTable from 'material-react-table';

const DataTable = ({ columns, data, title = '' }) => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      title={title}
      enableColumnOrdering={true}
      enableRowActions={false}
      muiTableProps={{
        sx: {
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          overflow: 'hidden',
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          backgroundColor: '#f9fafb',
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          backgroundColor: '#fff',
          color: '#fff',
          fontWeight: '200',
        },
      }}
      muiPaginationProps={{
        rowsPerPageOptions: [5, 10, 20],
        showFirstButton: true,
        showLastButton: true,
      }}
      initialState={{
        pagination: { pageSize: 10 },
        density: 'comfortable',
      }}
    />
  );
};

export default DataTable;

import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#4caf50' },
    secondary: { main: '#2492FF' },
    error: { main: '#ff0000' },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
  },
});

const CustomTable = ({
  columns,
  data,
  rowCount, // total de registros del backend
  pageIndex,
  pageSize,
  onPaginationChange, // función para actualizar los estados en el padre
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ m: 0 }}>
        <MaterialReactTable
          columns={columns}
          data={data}
          manualPagination
          rowCount={rowCount}
          state={{ pagination: { pageIndex, pageSize } }}
          onPaginationChange={onPaginationChange}
          layoutMode="grid"
          columnResizeMode="onChange"
          enableColumnResizing
          enableStickyHeader={true}
          muiTablePaginationProps={{
            rowsPerPageOptions: [10, 15, 20, 50, 100],
            labelRowsPerPage: 'Filas por página:',
          }}
          defaultColumn={{
            minSize: 50,
            size: 150,
            maxSize: 300,
          }}
          muiTableContainerProps={{
            sx: {
              maxHeight: '70vh',
              overflowX: 'auto',
              overflowY: 'auto',
            },
          }}
          muiTablePaperProps={{
            elevation: 2,
            sx: { borderRadius: '5px' },
          }}
          muiTableHeadCellProps={{
            sx: {
              backgroundColor: '#f5f5f5',
              fontWeight: '600',
              fontSize: 13,
              py: 1,
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              fontSize: 12,
              py: 0.5,
            },
          }}
          muiTableBodyRowProps={{
            sx: {
              height: '32px',
            },
          }}
          enableColumnActions={false}
          enableDensityToggle={false}
          enableRowSelection={false}
        />
      </Box>
    </ThemeProvider>
  );
};

export default CustomTable;

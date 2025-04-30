import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';

// Tema MUI personalizado
const theme = createTheme({
  palette: {
    primary: { main: '#4caf50' }, // Verde
    secondary: { main: '#2492FF' }, // Azul
    error: { main: '#ff0000' }, // Rojo
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 12,
  },
});

const CustomTable = ({ columns, data, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ m: 0  }}>
        <MaterialReactTable
          columns={columns}
          data={data}
          layoutMode="grid"
          columnResizeMode="onChange"
          enableColumnResizing
          defaultColumn={{
            minSize: 50,
            size: 150,
            maxSize: 300,
          }}
          
          muiTableContainerProps={{
            sx: {
              maxHeight: '70vh',
              overflowX: 'auto',
            },
          }}
          enableColumnActions={false}
          enableDensityToggle={false}
          enableRowSelection= {false}
          muiTablePaperProps={{
            elevation: 2,
            sx: { borderRadius: '12px' },
          }}
          
          muiTableHeadCellProps={{
            sx: {
              backgroundColor: '#f5f5f5',
              fontWeight: 'semibold',
              fontSize: 14,
            },
          }}
          muiTableBodyCellProps={{
            sx: {
              fontSize: 12,
            },
          }}
          
          {...props} // permite sobrescribir configuraciones
          
        />
      </Box>
    </ThemeProvider>
  );
};

export default CustomTable;

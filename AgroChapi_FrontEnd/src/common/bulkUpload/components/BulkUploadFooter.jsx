import React from 'react';
import { Box, Button } from '@mui/material';

const BulkUploadFooter = ({ onCancel, onConfirm, isConfirmDisabled }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    gap={2}
    py={2}
    px={3}
    borderTop="1px solid #e0e0e0"
  >
    <Button
      onClick={onCancel}
      variant="contained"
      sx={{
        backgroundColor: '#6c757d',
        '&:hover': { backgroundColor: '#5a6268' },
        minWidth: 120,
      }}
    >
      Cancelar
    </Button>

    <Button
      onClick={onConfirm}
      variant="contained"
      disabled={isConfirmDisabled}
      sx={{
        backgroundColor: '#28a745',
        '&:hover': { backgroundColor: '#218838' },
        minWidth: 120,
      }}
    >
      Cargar
    </Button>
  </Box>
);

export default BulkUploadFooter;

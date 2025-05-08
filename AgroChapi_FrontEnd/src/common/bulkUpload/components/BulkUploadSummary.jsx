import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const BulkUploadSummary = ({ total, valid, duplicated = 0, errors, showContent }) => (
  <Paper variant="outlined" sx={{ p: 2, mt: 2, mb: 2, minHeight: '96px' }}>
    {showContent ? (
      <>
        <Typography variant="body2" gutterBottom>
          Se detectaron <strong>{total}</strong> filas
        </Typography>
        <Typography variant="body2" color="success.main">
          {valid} filas se importaron correctamente
        </Typography>
        <Typography variant="body2" color="warning.main">
          {duplicated} filas duplicadas
        </Typography>
        <Typography variant="body2" color="error.main">
          {errors} filas con error
        </Typography>
      </>
    ) : (
      <Typography variant="body2" color="text.disabled">
        Aún no se ha subido ningún archivo.
      </Typography>
    )}
  </Paper>
);

export default BulkUploadSummary;

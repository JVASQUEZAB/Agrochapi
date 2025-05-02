import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const BulkUploadInvalidRows = ({ invalidRows = [], errorMessage = '' }) => {
  if (!invalidRows.length && !errorMessage) return null;

  return (
    <Box mt={2}>
      {errorMessage && (
        <Typography variant="body2" color="error" gutterBottom>
          {errorMessage}
        </Typography>
      )}

      {invalidRows.length > 0 && (
        <>
          <Typography variant="subtitle2" color="error" gutterBottom>
            Filas inválidas:
          </Typography>
          <List dense sx={{ pl: 2 }}>
            {invalidRows.slice(0, 5).map((item, idx) => (
              <ListItem key={idx} sx={{ display: 'list-item', pl: 1 }}>
                Fila {item.index}: {item.error}
              </ListItem>
            ))}
            {invalidRows.length > 5 && (
              <ListItem sx={{ display: 'list-item', pl: 1 }}>...y más</ListItem>
            )}
          </List>
        </>
      )}
    </Box>
  );
};

export default BulkUploadInvalidRows;

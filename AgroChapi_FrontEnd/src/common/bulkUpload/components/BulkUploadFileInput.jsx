import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Upload } from 'lucide-react';

const BulkUploadFileInput = ({ onFileUpload, errorMessage }) => (
  <Box mb={3}>
    <Button
      component="label"
      variant="contained"
      color="primary"
      startIcon={<Upload size={18} />}
    >
      Subir archivo Excel
      <input
        type="file"
        hidden
        accept=".xlsx, .xls"
        onChange={onFileUpload}
      />
    </Button>

    {errorMessage && (
      <Typography variant="body2" color="error" mt={1}>
        {errorMessage}
      </Typography>
    )}
  </Box>
);

export default BulkUploadFileInput;

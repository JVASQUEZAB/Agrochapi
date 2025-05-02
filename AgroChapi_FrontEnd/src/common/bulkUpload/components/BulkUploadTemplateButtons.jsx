import React from 'react';
import { Box, Button } from '@mui/material';
import { Download } from 'lucide-react';

const BulkUploadTemplateButtons = ({ onDownloadEmpty, onDownloadWithData }) => (
  <Box display="flex" justifyContent="space-between" mb={2}>
    <Button
      onClick={onDownloadEmpty}
      startIcon={<Download size={18} />}
      variant="outlined"
      color="primary"
    >
      Plantilla vacía
    </Button>
    <Button
      onClick={onDownloadWithData}
      startIcon={<Download size={18} />}
      variant="outlined"
      color="secondary"
    >
      Plantilla con datos
    </Button>
  </Box>
);

export default BulkUploadTemplateButtons;

// src/common/bulkUpload/BulkUploadModal.jsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TemplateDownloadButtons from './components/TemplateDownloadButtons';
import ExcelUploader from './components/ExcelUploader';
import UploadSummary from './components/UploadSummary';
import ActionButtons from './components/ActionButtons';

const BulkUploadModal = ({
  isOpen,
  onClose,
  title,
  templateHeaders,
  existingData,
  filename,
  validateTemplate,
  onSubmit,
}) => {
  const [parsedData, setParsedData] = React.useState([]);
  const [errors, setErrors] = React.useState([]);
  const [file, setFile] = React.useState(null);

  const handleFileUpload = async (file, data) => {
    setFile(file);
    const validationResults = await validateTemplate(data);
    setParsedData(validationResults.validRows);
    setErrors(validationResults.errors);
  };

  const handleReset = () => {
    setFile(null);
    setParsedData([]);
    setErrors([]);
  };

  const handleConfirmUpload = () => {
    if (parsedData.length > 0) {
      onSubmit(parsedData);
      handleReset();
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">{title}</span>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>

      <Divider />

      <DialogContent>
        <Box className="space-y-6 pt-4">
          <TemplateDownloadButtons
            headers={templateHeaders}
            data={existingData}
            filename={filename}
          />

          <ExcelUploader onUpload={handleFileUpload} />

          <UploadSummary validRows={parsedData} errors={errors} />
        </Box>
      </DialogContent>

      <DialogActions className="px-6 pb-4">
        <ActionButtons
          onCancel={() => {
            handleReset();
            onClose();
          }}
          onConfirm={handleConfirmUpload}
          disabled={!file}
        />
      </DialogActions>
    </Dialog>
  );
};

export default BulkUploadModal;

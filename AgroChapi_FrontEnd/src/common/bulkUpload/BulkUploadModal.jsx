import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import Modal from '../../components/ui/Modal';
import BulkUploadTemplateButtons from './components/BulkUploadTemplateButtons';
import BulkUploadFileInput from './components/BulkUploadFileInput';
import BulkUploadInvalidRows from './components/BulkUploadInvalidRows';
import BulkUploadSummary from './components/BulkUploadSummary';

const BulkUploadModal = ({
  isOpen,
  onClose,
  templateHeaders = [],
  existingData = [],
  filename = 'plantilla',
  onSubmit,
  validateRow,
  mapRowToPayload,
  title = 'Carga masiva'
}) => {
  const [uploadedRows, setUploadedRows] = useState([]);
  const [validRows, setValidRows] = useState([]);
  const [invalidRows, setInvalidRows] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const resetState = () => {
    setUploadedRows([]);
    setValidRows([]);
    setInvalidRows([]);
    setErrorMessage('');
  };

  const downloadTemplate = (withData = false) => {
    const data = withData ? existingData : [];
    const worksheet = XLSX.utils.json_to_sheet(
      data.length ? data : [Object.fromEntries(templateHeaders.map(h => [h, '']))]
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Plantilla');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `${filename}.xlsx`);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const workbook = XLSX.read(bstr, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);

      if (!data.length) {
        setErrorMessage('El archivo está vacío.');
        setUploadedRows([]);
        setValidRows([]);
        setInvalidRows([]);
        return;
      }

      if (templateHeaders.length && !Object.keys(data[0] || {}).every(h => templateHeaders.includes(h))) {
        setErrorMessage('Error en el archivo');
        setUploadedRows(data);
        setValidRows([]);
        setInvalidRows([]);
        return;
      }

      const valid = [];
      const invalid = [];

      data.forEach((row, i) => {
        const { isValid, error } = validateRow(row);
        if (isValid) {
          valid.push(mapRowToPayload(row));
        } else {
          invalid.push({ row, error, index: i + 2 });
        }
      });

      setUploadedRows(data);
      setValidRows(valid);
      setInvalidRows(invalid);
      setErrorMessage('');
    };
    reader.readAsBinaryString(file);
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleSubmit = () => {
    if (validRows.length > 0) {
      onSubmit(validRows);
      handleClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={title}
      onConfirm={handleSubmit}
      confirmText="Subir datos"
      cancelText="Cancelar"
      confirmColor="blue"
      size="max-w-xl"
      confirmDisabled={validRows.length === 0}
    >
      <BulkUploadTemplateButtons
        onDownloadEmpty={() => downloadTemplate(false)}
        onDownloadWithData={() => downloadTemplate(true)}
      />

      <BulkUploadFileInput
        onFileUpload={handleFileUpload}
        errorMessage={errorMessage}
      />

      <BulkUploadSummary
        total={uploadedRows.length || 0}
        valid={validRows.length || 0}
        duplicated={0}
        errors={invalidRows.length || (errorMessage ? uploadedRows.length : 0)}
        showContent={uploadedRows.length > 0 || !!errorMessage}
      />

      <BulkUploadInvalidRows invalidRows={invalidRows} />
    </Modal>
  );
};

export default BulkUploadModal;

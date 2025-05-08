import { useState } from 'react';
import * as XLSX from 'xlsx';
import { showToast } from '../../lib/toast';

/**
 * Hook para manejar carga masiva desde archivo Excel
 * @param {Function} validateTemplate - Función de validación personalizada para el módulo (ej: validateUserTemplate)
 */
export const useBulkUpload = (validateTemplate) => {
  const [fileName, setFileName] = useState('');
  const [parsedRows, setParsedRows] = useState([]);
  const [invalidRows, setInvalidRows] = useState([]);
  const [isValidFile, setIsValidFile] = useState(false);

  const handleFileChange = async (file) => {
    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

      console.log('Parsed JSON:', json);
      
      const { validRows, errors } = await validateTemplate(json);

      setFileName(file.name);
      setParsedRows(validRows);
      setInvalidRows(errors);
      setIsValidFile(validRows.length > 0);

      if (errors.length > 0) {
        showToast.warning(`${errors.length} fila(s) fueron ignoradas por errores de validación`);
      }
    } catch (error) {
      console.error('Error al procesar archivo Excel:', error);
      showToast.error('Error al leer el archivo. Verifica que sea un Excel válido.');
      reset();
    }
  };

  const reset = () => {
    setFileName('');
    setParsedRows([]);
    setInvalidRows([]);
    setIsValidFile(false);
  };

  return {
    fileName,
    parsedRows,
    invalidRows,
    isValidFile,
    handleFileChange,
    reset,
  };
};

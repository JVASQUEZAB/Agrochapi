import React, { useRef } from 'react';
import ResponsiveActionButton from '../../../components/ui/ResponsiveActionButton';
import { Upload } from 'lucide-react';

const ExcelUploader = ({ onFileSelected, fileName }) => {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.xlsx')) {
      onFileSelected(file);
    } else {
      onFileSelected(null); // puedes pasar null para indicar error o archivo inválido
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />
      <ResponsiveActionButton variant="outline" onClick={triggerFileInput}>
        <Upload className="w-4 h-4 mr-2" />
        Subir Excel
      </ResponsiveActionButton>
      {fileName && <span className="text-sm text-gray-600 truncate max-w-xs">{fileName}</span>}
    </div>
  );
};

export default ExcelUploader;

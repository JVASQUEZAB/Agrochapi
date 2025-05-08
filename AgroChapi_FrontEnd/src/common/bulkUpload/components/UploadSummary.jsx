import React from 'react';

const UploadSummary = ({ summary }) => {
  if (!summary) return null;

  const { validCount, invalidCount, errors } = summary;

  return (
    <div className="mt-4">
      <div className="text-sm mb-2">
        <p><strong>Registros válidos:</strong> {validCount}</p>
        <p><strong>Registros con errores:</strong> {invalidCount}</p>
      </div>

      {errors && errors.length > 0 && (
        <div className="mt-2 max-h-48 overflow-y-auto border rounded p-2 bg-gray-50">
          <p className="text-sm font-semibold mb-2">Errores encontrados:</p>
          <ul className="text-sm list-disc list-inside space-y-1">
            {errors.map((err, idx) => (
              <li key={idx}>
                <span className="font-medium">Fila {err.row}:</span> {err.messages.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadSummary;

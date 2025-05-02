import React from 'react';
import BulkUploadModal from '../../../../common/bulkUpload/BulkUploadModal';


const validateRow = (row) => {
    // Ejemplo simple: puedes adaptarlo
    if (!row.Nombre || !row.DNI || !row.Rol) {
      return { isValid: false, error: 'Faltan campos obligatorios' };
    }
    return { isValid: true };
  };
  
  const mapRowToPayload = (row) => ({
    full_name: row.Nombre,
    dni: row.DNI,
    role: row.Rol,
    // otros campos
  });


const UserBulkUploadModal = ({ open, onClose }) => (
  <BulkUploadModal
    isOpen={open}
    onClose={onClose}
    title="Carga masiva de usuarios"
    templateHeaders={['DNI', 'Nombres', 'Apellidos', 'Rol', 'Email']}
    validateRow={validateRow}
    mapRowToPayload={mapRowToPayload}
    filename="usuarios_template"
  />
);

export default UserBulkUploadModal;

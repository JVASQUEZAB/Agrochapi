// src/common/bulkUpload/modules/admin/users/userTemplateHeaders.js

export const userTemplateHeaders = [
    { header: 'Dni', key: 'dni' },
    { header: 'Nombres', key: 'first_name' },
    { header: 'Apellidos', key: 'last_name' },
    { header: 'Correo', key: 'email' },
    { header: 'Rol', key: 'role_name' },
  ];
  
  // También puedes exponer una función auxiliar para validar cabeceras
  export function isValidUserTemplateHeaders(headers) {
    const expectedHeaders = userTemplateHeaders.map(h => h.header.toLowerCase());
    const receivedHeaders = headers.map(h => h.toLowerCase());
    return expectedHeaders.every(h => receivedHeaders.includes(h));
  }
  
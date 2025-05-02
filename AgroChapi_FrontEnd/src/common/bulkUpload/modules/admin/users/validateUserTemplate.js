// src/common/bulkUpload/modules/admin/users/validateUserTemplate.js

export function validateUserTemplate(rows, existingDnis, availableRoles) {
    const validRows = [];
    const errors = [];
  
    const roleMap = availableRoles.reduce((acc, role) => {
      acc[role.name.toLowerCase()] = role.id;
      return acc;
    }, {});
  
    rows.forEach((row, index) => {
      const rowNumber = index + 2; // +2 por el encabezado en Excel
  
      const dni = row['dni']?.toString().trim();
      const firstName = row['first_name']?.toString().trim();
      const lastName = row['last_name']?.toString().trim();
      const email = row['email']?.toString().trim();
      const roleName = row['role_name']?.toString().trim().toLowerCase();
  
      // Validaciones básicas
      if (!dni || !firstName || !lastName || !roleName) {
        errors.push(`Fila ${rowNumber}: campos requeridos faltantes.`);
        return;
      }
  
      if (existingDnis.includes(dni)) {
        errors.push(`Fila ${rowNumber}: DNI duplicado (${dni}).`);
        return;
      }
  
      const roleId = roleMap[roleName];
      if (!roleId) {
        errors.push(`Fila ${rowNumber}: rol inválido (${row['role_name']}).`);
        return;
      }
  
      validRows.push({
        dni,
        first_name: firstName,
        last_name: lastName,
        email,
        role_id: roleId,
        password: dni, // se usará como contraseña
      });
    });
  
    return { validRows, errors };
  }
  
// src/common/bulkUpload/modules/users/validateUserTemplate.js

export function createValidateUserTemplate(existingDnis, availableRoles) {
  return function validateUserTemplate(rows) {
    const validRows = [];
    const errors = [];

    const roleMap = availableRoles.reduce((acc, role) => {
      acc[role.name.toLowerCase()] = role.id;
      return acc;
    }, {});

    rows.forEach((row, index) => {
      const rowNumber = index + 2; // +2 por encabezado

      const dni = row['dni']?.toString().trim();
      const firstName = row['first_name']?.toString().trim();
      const lastName = row['last_name']?.toString().trim();
      const email = row['email']?.toString().trim();
      const roleName = row['role_name']?.toString().trim().toLowerCase();

      if (!dni || !firstName || !lastName || !roleName) {
        errors.push({ row, error: 'Campos requeridos faltantes.', index: rowNumber });
        return;
      }

      if (existingDnis.includes(dni)) {
        errors.push({ row, error: `DNI duplicado (${dni})`, index: rowNumber });
        return;
      }

      const roleId = roleMap[roleName];
      if (!roleId) {
        errors.push({ row, error: `Rol inválido (${row['role_name']})`, index: rowNumber });
        return;
      }

      validRows.push({
        dni,
        first_name: firstName,
        last_name: lastName,
        email,
        role_id: roleId,
        password: dni,
      });
    });

    return { validRows, errors };
  };
}

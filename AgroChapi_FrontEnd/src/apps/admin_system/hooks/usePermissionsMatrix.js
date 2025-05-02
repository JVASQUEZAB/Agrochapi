import { useEffect, useState } from 'react';
import API from '../../../api/axios';
import { showToast } from '../../../lib/toast';

export const usePermissionsMatrix = () => {
  const [rawPermissions, setRawPermissions] = useState([]);
  const [modules, setModules] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modifiedPermissions, setModifiedPermissions] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await API.get('core/permissions/modulespermission/');
      setRawPermissions(data);

      const uniqueModules = Array.from(
        new Map(data.map((d) => [d.module, { module: d.module, module_name: d.module_name }]))
      ).map(([, value]) => value);

      const uniqueRoles = Array.from(
        new Map(data.map((d) => [d.role, { role: d.role, role_name: d.role_name }]))
      ).map(([, value]) => value);

      const matrix = uniqueRoles.map((role) => {
        const rolePermissions = data.filter((d) => d.role === role.role);
        const row = { role: role.role, role_name: role.role_name };
        uniqueModules.forEach((mod) => {
          const found = rolePermissions.find((p) => p.module === mod.module);
          row[mod.module_name] = found?.allowed || false;
        });
        return row;
      });

      setModules(uniqueModules);
      setRoles(matrix);
    } catch (error) {
      console.error(error);
      showToast('error', 'Error al cargar permisos');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = (roleId, moduleId, newValue) => {
    const existing = rawPermissions.find((p) => p.role === roleId && p.module === moduleId);
    const existingMod = modifiedPermissions.find(
      (p) => p.role === roleId && p.module === moduleId
    );

    let updated = [...modifiedPermissions];

    if (existingMod) {
      updated = updated.map((p) =>
        p.role === roleId && p.module === moduleId ? { ...p, allowed: newValue } : p
      );
    } else {
      updated.push({
        id: existing?.id || null,
        role: roleId,
        module: moduleId,
        allowed: newValue,
      });
    }

    setModifiedPermissions(updated);
    // actualizar roles localmente para feedback instantáneo
    setRoles((prev) =>
      prev.map((row) =>
        row.role === roleId
          ? {
              ...row,
              [modules.find((m) => m.module === moduleId).module_name]: newValue,
            }
          : row
      )
    );
  };

  const saveChanges = async () => {
    setLoading(true);
    try {
      await Promise.all(
        modifiedPermissions.map((perm) =>
          API.put(`core/permissions/modulespermission/${perm.id}/`, {
            role: perm.role,
            module: perm.module,
            allowed: perm.allowed,
          })
        )
      );
  
      showToast('success', 'Permisos asignados correctamente');
      await fetchData();
      setModifiedPermissions([]);
    } catch (error) {
      console.error('Error al guardar cambios:', error);
      showToast('error', 'Error al modificar permisos');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return {
    roles,
    modules,
    loading,
    modifiedPermissions,
    handleCheckboxChange,
    saveChanges,
    fetchData,
  };
};

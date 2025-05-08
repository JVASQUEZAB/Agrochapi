import React, { useState } from 'react'; 
import Modal from '../../../../components/ui/Modal';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormHelperText
} from '@mui/material';

const CreateWorkModal = ({ isOpen, onClose, onCreate, activities }) => {
  const [formData, setFormData] = useState({
    codigo_actividad: '',
    codigo: '',
    descripcion: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.codigo_actividad) errs.codigo_actividad = 'Actividad requerida';
    if (!formData.codigo.trim()) errs.codigo = 'Código requerido';
    if (!formData.descripcion.trim()) errs.descripcion = 'Descripción requerida';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleConfirm = () => {
    if (validate()) {
      onCreate({
        codigo_actividad: formData.codigo_actividad.trim().toUpperCase(),
        codigo: formData.codigo.trim().toUpperCase(),
        descripcion: formData.descripcion.trim(),
        is_active: true
      });
      setFormData({ codigo_actividad: '', codigo: '', descripcion: '' });
      setErrors({});
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      title="Crear Nueva Labor"
      confirmText="Crear"
      confirmColor="green"
    >
      <div className="flex flex-col gap-4">
        <FormControl fullWidth error={!!errors.codigo_actividad}>
          <InputLabel id="actividad-label">Actividad</InputLabel>
          <Select
            labelId="actividad-label"
            value={formData.codigo_actividad}
            onChange={(e) =>
              setFormData({ ...formData, codigo_actividad: e.target.value })
            }
            label="Actividad"
          >
            {activities.map((activity) => (
              <MenuItem key={activity.codigo} value={activity.codigo}>
                {`${activity.codigo} - ${activity.descripcion}`}
              </MenuItem>
            ))}
          </Select>
          {errors.codigo_actividad && (
            <FormHelperText>{errors.codigo_actividad}</FormHelperText>
          )}
        </FormControl>

        <TextField
          label="Código"
          value={formData.codigo}
          onChange={(e) =>
            setFormData({ ...formData, codigo: e.target.value })
          }
          inputProps={{
            maxLength: 6,
            style: { textTransform: 'uppercase' }
          }}
          error={!!errors.codigo}
          helperText={errors.codigo}
          fullWidth
        />

        <TextField
          label="Descripción"
          value={formData.descripcion}
          onChange={(e) =>
            setFormData({ ...formData, descripcion: e.target.value })
          }
          error={!!errors.descripcion}
          helperText={errors.descripcion}
          fullWidth
        />
      </div>
    </Modal>
  );
};

export default CreateWorkModal;

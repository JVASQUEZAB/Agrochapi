import React from 'react';
import ResponsiveActionButton from '../../../../components/ui/ResponsiveActionButton';
import SaveIcon from '@mui/icons-material/Save';

const SaveButton = ({ onClick, disabled }) => (
  <ResponsiveActionButton
    onClick={onClick}
    icon={<SaveIcon />}
    text="Guardar Cambios"
    color="primary"
    disabled={disabled}
  />
);

export default SaveButton;

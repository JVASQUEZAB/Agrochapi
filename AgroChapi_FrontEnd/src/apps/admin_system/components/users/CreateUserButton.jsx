import React from 'react';
import ResponsiveActionButton from '../../../../components/ui/ResponsiveActionButton';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const CreateUserButton = ({ onClick }) => (
  <ResponsiveActionButton
    onClick={onClick}
    icon={<PersonAddAltIcon />}
    text="Crear Usuario"
    color="success"
  />
);

export default CreateUserButton;

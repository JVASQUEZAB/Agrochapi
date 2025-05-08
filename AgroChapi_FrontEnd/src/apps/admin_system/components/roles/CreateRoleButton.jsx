import React from 'react';
import ResponsiveActionButton from '../../../../components/ui/ResponsiveActionButton';
import GroupAddIcon from '@mui/icons-material/GroupAdd'; // más adecuado para "crear rol"

const CreateRoleButton = ({ onClick }) => (
  <ResponsiveActionButton
    onClick={onClick}
    icon={<GroupAddIcon />}
    text="Crear Rol"
    color="success"
  />
);

export default CreateRoleButton;

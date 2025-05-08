import React from 'react';
import ResponsiveActionButton from '../../../../components/ui/ResponsiveActionButton';
import AddTaskIcon from '@mui/icons-material/AddTask';;

const CreateUserButton = ({ onClick }) => (
  <ResponsiveActionButton
    onClick={onClick}
    icon={<AddTaskIcon />}
    text="Agregar Actividad"
    color="success"
  />
);

export default CreateUserButton;

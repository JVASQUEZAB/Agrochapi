import React from 'react';
import ResponsiveActionButton from '../../../../components/ui/ResponsiveActionButton';
import AddTaskIcon from '@mui/icons-material/AddTask';;

const CreateWorkButton = ({ onClick }) => (
  <ResponsiveActionButton
    onClick={onClick}
    icon={<AddTaskIcon />}
    text="Crear Nueva Labor"
    color="success"
  />
);

export default CreateWorkButton;

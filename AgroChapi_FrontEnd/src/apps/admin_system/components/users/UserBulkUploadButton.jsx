import React from 'react';
import ResponsiveActionButton from '../../../../components/ui/ResponsiveActionButton';
import { Upload } from 'lucide-react';

const UserBulkUploadButton = ({ onClick }) => (
  console.log('Boton de carga masiva clickeado'),
  <ResponsiveActionButton
    onClick={onClick}
    icon={<Upload size={16} />}
    text="Carga Masiva"
    color="secondary"
  />
);

export default UserBulkUploadButton;
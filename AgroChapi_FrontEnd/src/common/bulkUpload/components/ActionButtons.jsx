import React from 'react';
import ResponsiveActionButton from '../../../components/ui/ResponsiveActionButton';
import { Loader2 } from 'lucide-react';

const ActionButtons = ({ isLoading, isValid, onCancel, onUpload }) => {
  return (
    <div className="mt-6 flex justify-end gap-4">
      <ResponsiveActionButton variant="outline" onClick={onCancel} disabled={isLoading}>
        Cancelar
      </ResponsiveActionButton>
      <ResponsiveActionButton
        variant="default"
        onClick={onUpload}
        disabled={!isValid || isLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="animate-spin" size={16} />
            Cargando...
          </span>
        ) : (
          'Cargar'
        )}
      </ResponsiveActionButton>
    </div>
  );
};

export default ActionButtons;

import React from 'react';
import ResponsiveActionButton from '../../../components/ui/ResponsiveActionButton';
import { Download } from 'lucide-react';

const TemplateDownloadButtons = ({ onDownloadEmpty, onDownloadWithData }) => (
  <div className="flex gap-2">
    <ResponsiveActionButton variant="outline" onClick={onDownloadEmpty} className="text-blue-600 border-blue-600">
      <Download className="mr-2 h-4 w-4" />
      PLANTILLA VACÍA
    </ResponsiveActionButton>
    <ResponsiveActionButton variant="outline" onClick={onDownloadWithData} className="text-purple-600 border-purple-600">
      <Download className="mr-2 h-4 w-4" />
      PLANTILLA CON DATOS
    </ResponsiveActionButton>
  </div>
);

export default TemplateDownloadButtons;

import { toast } from 'react-hot-toast';
// src/components/ui/ToastMessage.jsx
import React from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaSpinner, FaTimes } from 'react-icons/fa';

const iconMap = {
  success: <FaCheckCircle className="text-green-500 text-xl" />,
  error: <FaTimesCircle className="text-red-500 text-xl" />,
  warning: <FaExclamationTriangle className="text-yellow-500 text-xl" />,
  loading: <FaSpinner className="text-blue-500 text-xl animate-spin" />,
};

const colorMap = {
  success: 'border-l-green-500 bg-green-50 text-green-800',
  error: 'border-l-red-500 bg-red-50 text-red-800',
  warning: 'border-l-yellow-500 bg-yellow-50 text-yellow-800',
  loading: 'border-l-blue-500 bg-blue-50 text-blue-800',
};

const ToastMessage = ({ t, type = 'success', title, message }) => {
  return (
    <div
      className={`flex items-start w-[320px] shadow-md rounded-xl p-4 border-l-4 relative ${colorMap[type]}`}
    >
      <div className="mr-3 mt-1">
        {iconMap[type]}
      </div>
      <div className="flex-1">
        {title && <p className="font-bold">{title}</p>}
        <p className="text-sm">{message}</p>
      </div>
      <button
        onClick={() => t && t.id && toast.dismiss(t.id)}
        className="absolute top-2 right-2 text-xl text-gray-400 hover:text-gray-700"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default ToastMessage;

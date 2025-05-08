import React from 'react';

const confirmButtonClasses = {
  blue: "bg-blue-500 hover:bg-blue-600",
  red: "bg-red-500 hover:bg-red-600",
  green: "bg-green-500 hover:bg-green-600",
  gray: "bg-gray-500 hover:bg-gray-600",
};

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "max-w-lg",
  onConfirm,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  confirmColor = "blue",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000050] flex justify-center items-center z-80">
      <div className={`bg-white rounded-lg shadow-lg w-full ${size} p-6 relative`}>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        {children}

        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-white rounded ${confirmButtonClasses[confirmColor] || confirmButtonClasses.blue}`}
          >
            {confirmText}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;

import toast from 'react-hot-toast';
import ToastMessage from '../components/ui/ToastMessage';

/**
 * Mostrar toast personalizado de cualquier tipo.
 * @param {string} type - 'success' | 'error' | 'warning' | 'loading'
 * @param {string} title - Título del toast
 * @param {string} message - Mensaje del toast
 */
export const showToast = (type, title, message) => {
  toast.custom((t) => (
    <ToastMessage t={t} type={type} title={title} message={message} />
  ));
};

/**
 * Muestra un toast de tipo 'loading' y retorna su ID.
 * @param {string} message - Mensaje a mostrar
 * @returns {string} toastId
 */
export const showLoadingToast = (message = 'Cargando...') => {
  const id = toast.custom((t) => (
    <ToastMessage t={t} type="loading" title="Cargando..." message={message} />
  ));
  return id;
};

/**
 * Cierra un toast específico por su ID.
 * @param {string} id
 */
export const dismissToast = (id) => toast.dismiss(id);

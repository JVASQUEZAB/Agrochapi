import React from 'react';
import { useForm } from 'react-hook-form';
import API from '../../../api/axios';

const UpdatePasswordForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post('core/users/me/', {
        current_password: data.currentPassword,
        new_password: data.newPassword,
        confirm_password: data.confirmPassword,
      });
      alert('Contraseña actualizada correctamente');
      reset();
    } catch (error) {
      console.error('Error al actualizar contraseña:', error);
      alert('Error al actualizar contraseña');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className='flex justify-center'>
        <h3 className="text-lg font-medium">Actualizar contraseña</h3>
      </div>

      <input
        type="password"
        placeholder="Contraseña actual"
        {...register('currentPassword')}
        className="input w-full border border-gray-300 rounded-xl bg-white p-2"
      />

      <input
        type="password"
        placeholder="Nueva contraseña"
        {...register('newPassword')}
        className="input w-full border border-gray-300 rounded-xl bg-white p-2"
      />

      <input
        type="password"
        placeholder="Confirmar contraseña"
        {...register('confirmPassword')}
        className="input w-full border border-gray-300 rounded-xl bg-white p-2"
      />

      <div className='flex justify-center'>
        <button type="submit" className="btn bg-blue-600 text-white px-4 py-2 rounded-xl">
          Cambiar contraseña
        </button>
      </div>
    </form>
  );
};

export default UpdatePasswordForm;

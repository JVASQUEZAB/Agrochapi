import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import API from '../../../api/axios';
import { showToast, showLoadingToast, dismissToast } from '../../../lib/toast';


const UpdateProfileForm = () => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchUser = async () => {
      const toastId = showLoadingToast('Cargando datos...');
      try {
        const response = await API.get('account/me/');
        reset(response.data);
        dismissToast(toastId);
      } catch (error) {
        dismissToast(toastId);
        console.error('Error al cargar usuario:', error);
        showToast('error', 'Error al cargar perfil', 'Ocurrió un problema al obtener tus datos');
      }
    };
    fetchUser();
  }, [reset]);

  const onSubmit = async (data) => {
    const toastId = showLoadingToast('Guardando cambios...');
    try {
      await API.put('account/me/', data);
      dismissToast(toastId);
      showToast('success', 'Perfil actualizado', 'Tu perfil ha sido actualizado correctamente');
    } catch (error) {
      dismissToast(toastId);
      console.error('Error al actualizar perfil:', error);
      showToast('error', 'Error al actualizar', 'Ocurrió un error al guardar los cambios');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="text-lg font-medium">Actualizar perfil</h3>

      <label className="text-gray-500">Dni</label>
      <input
        type="text"
        placeholder="Dni"
        {...register('dni')}
        className="input w-full text-gray-500 border-gray-300 rounded-xl bg-gray-100 p-2"
        disabled
      />

      <label className="text-gray-500">Nombre</label>
      <input
        type="text"
        placeholder="Nombre"
        {...register('first_name')}
        className="input w-full border-gray-300 rounded-xl bg-white p-2"
      />

      <label className="text-gray-500">Apellidos</label>
      <input
        type="text"
        placeholder="Apellido"
        {...register('last_name')}
        className="input w-full border-gray-300 rounded-xl bg-white p-2"
      />

      <label className="text-gray-500">Correo</label>
      <input
        type="email"
        placeholder="Email"
        {...register('email')}
        className="input w-full border-gray-300 rounded-xl bg-white p-2"
      />

      <div className="flex justify-center">
        <button type="submit" className="btn bg-green-600 text-white px-4 py-2 rounded-xl">
          Guardar cambios
        </button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;

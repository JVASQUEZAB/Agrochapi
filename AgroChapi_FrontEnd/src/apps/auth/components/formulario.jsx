import React, { useState } from 'react';
import API from '../../../api/axios'; // ruta corregida según la estructura


const Formulario = ({ onLogin }) => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post('token/', {
        dni,
        password,
      });

      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      API.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;

      if (onLogin) {
        onLogin(); // Redirige si se proporcionó la función
      }

    } catch (error) {
      if (error.response?.status === 401) {
        setError('Usuario o contraseña incorrectos. Intente nuevamente');
        setInputError(true);
      } else {
        console.error('Error inesperado:', error);
      }
    }
  };

  return (
    <form className="flex flex-col items-center gap-8 mt-8" onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="Usuario"
      className={
        `w-[90%] mx-auto p-2 bg-[#ffffff] 
        border ${inputError ? 
          'border-red-500' : 'border-gray-300'
        } 
        rounded-md 
        text-center 
        focus:outline-none 
        focus:ring-1 
        focus:ring-purple-500`
      }
      value={dni}
      onChange={(e) => setDni(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Contraseña"
      className={
        `w-[90%] mx-auto p-2 bg-[#ffffff] 
        border ${inputError ? 
          'border-red-500' : 'border-gray-300'
        } 
        rounded-md 
        text-center 
        focus:outline-none 
        focus:ring-1 
        focus:ring-purple-500`
      }
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    {error && <p className="w-[95%] mx-auto text-red-500 text-sm text-center">{error}</p>}
    <button
      type="submit"
      className="w-[95%] mx-auto p-2 bg-[#382D3A] border border-[#B443CC] text-white rounded-lg hover:bg-[#48334b] transition"
    >
      Iniciar sesión
    </button>
    
    <br />
    <footer className="text-xs text-gray-400 mt-4">
      &copy; {new Date().getFullYear()} AgroChapi. Todos los derechos reservados.
    </footer>
  </form>
  );
};

export default Formulario;

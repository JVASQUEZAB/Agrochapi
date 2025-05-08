import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth'; // o la ruta que uses para el hook

const Formulario = () => {
  const { login } = useAuth();

  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setInputError(false);

    try {
      await login(dni, password);
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Usuario o contraseña incorrectos. Intente nuevamente');
        setInputError(true);
      } else {
        setError('Error inesperado. Intenta más tarde.');
        console.error(err);
      }
    }
  };

  return (
    <form className="flex flex-col items-center gap-8 mt-8" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        className={`w-[90%] mx-auto p-2 bg-[#ffffff] border ${inputError ? 'border-red-500' : 'border-gray-300'} rounded-md text-center focus:outline-none focus:ring-1 focus:ring-purple-500`}
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        className={`w-[90%] mx-auto p-2 bg-[#ffffff] border ${inputError ? 'border-red-500' : 'border-gray-300'} rounded-md text-center focus:outline-none focus:ring-1 focus:ring-purple-500`}
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

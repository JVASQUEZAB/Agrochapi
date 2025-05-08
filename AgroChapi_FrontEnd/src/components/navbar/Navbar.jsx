import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import API from '../../api/axios';
import { AuthContext } from '../../context/AuthContext';

const Navbar = ({ onMenuClick }) => {
  const { user, setUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Cerrar dropdown al hacer clic fuera
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await API.post('core/logout/');
    } catch (error) {
      console.error('Error al cerrar sesión en el servidor:', error);
    }

    // Limpiar sesión
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    delete API.defaults.headers.common['Authorization'];
    setUser(null); // Limpia el usuario en el contexto
    navigate('/login');
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#EBECF4] flex justify-between items-center px-4 shadow z-50">
      <button onClick={onMenuClick} className="text-2xl md:hidden">
        <FaBars />
      </button>

      <div className="hidden md:flex items-center cursor-pointer" onClick={() => navigate('/')}>
        <img src="/modules/agrochapi.png" alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-2xl font-bold text-gray-800">Agro</span>
        <span className="text-2xl text-gray-800 ml-1">Chapi</span>
      </div>

      <div className="flex items-center gap-x-4 relative" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="flex items-center gap-2 text-gray-800">
          <FaUserCircle className="w-8 h-8 cursor-pointer" />
          {user && (
            <div className="hidden md:flex flex-col text-left cursor-pointer">
              <span className="text-sm font-medium">
                {user.first_name} {user.last_name}
              </span>
              <span className="text-xs">{user.role}</span>
            </div>
          )}
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-12 w-40 bg-white rounded-md shadow-md z-50">
            <ul className="py-2 text-sm font-semibold text-gray-900">
              <li>
                <button
                  onClick={() => navigate('/accounts/profile/')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Mi Perfil
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

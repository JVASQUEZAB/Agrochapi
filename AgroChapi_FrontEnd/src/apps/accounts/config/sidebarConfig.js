import { FaHome } from 'react-icons/fa';

export const accountsSidebarItems = [
  {
    id: 1,            // ID único para el elemento
    label: 'Home',      // Nombre del elemento
    path: '/',          // Ruta de la página de inicio
    //icon: <FaHome />,   // Icono de Home
  },
  {
    id: 2,
    label: 'Cuenta', 
    path: '',
    children: [
      {
        
        label: "Actualizar datos",
        path: "/accounts/profile/"
      },
      {
        
        label: "Información de la cuenta",
        path: "/accounts/profile-info/"
      },
    ]
  }
];
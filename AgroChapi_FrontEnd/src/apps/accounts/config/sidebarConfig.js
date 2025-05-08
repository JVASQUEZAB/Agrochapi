import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";


export const accountsSidebarItems = [
  {
    id: 1,            // ID único para el elemento
    label: 'Home',      // Nombre del elemento
    path: '/',          // Ruta de la página de inicio
    icon: GoHome,
  },
  {
    id: 2,
    label: 'Actualizar datos', 
    path: '/accounts/profile',
    icon: CgProfile,
  },
  {
    id: 3,
    label: 'Información', 
    path: '/accounts/profile-info/',
    icon: CgProfile,
  }
];
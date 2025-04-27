import { FaHome } from "react-icons/fa";

export const accountsSidebarItems = [
  {
    id: 0, // ID único para el elemento
    label: "Home", // Nombre del elemento
    path: "/", // Ruta de la página de inicio
    //icon: <FaHome />,   // Icono de Home
  },
  {
    id: 1, // ID único para el elemento
    label: "Admin Dashboard", // Nombre del elemento
    path: "/admin/dashboard", // Ruta de la página de inicio
    //icon: <FaHome />,   // Icono de Home
  },
  {
    id: 2,
    label: "Sistema",
    path: "/",
    children: [
      {
        
        label: "Usuarios",
        path: "/admin/users/",
      },
      {
        
        label: "Roles",
        path: "/admin/roles/",
      },
      {
        
        label: "Calendario",
        path: "/admin/calendar/",
      },
      {
        
        label: "Campañas",
        path: "/admin/campaign/",
      },
    ],
  },
  {
    id: 7,
    label: "Actividades",
    path: "/",
    children: [
      {
        
        label: "Actividades",
        path: "/admin/activities/",
      },
      {
        
        label: "Labores",
        path: "/admin/works/",
      },
      {
        
        label: "U. Medida",
        path: "/admin/u-m/",
      }
    ],
  },
  {
    id: 11,
    label: "Maestros Agrícolas",
    path: "/",
    children: [
      {
        
        label: "Fundos",
        path: "/admin/growers/",
      },
      {
        
        label: "Cultivos",
        path: "/admin/crops/",
      },
      {
        
        label: "Variedades",
        path: "/admin/varieties/",
      },
      {
        
        label: "Consumidores",
        path: "/admin/consumers/",
      }
    ],
  },
];

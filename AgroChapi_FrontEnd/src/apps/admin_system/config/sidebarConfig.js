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
        path: "/accounts/profile/",
      },
      {
        label: "Roles",
        path: "/accounts/profile/",
      },
      {
        label: "Calendario",
        path: "/accounts/profile/",
      },
      {
        label: "Campañas",
        path: "/accounts/profile/",
      },
    ],
  },
  {
    id: 3,
    label: "Actividades",
    path: "/",
    children: [
      {
        label: "Actividades",
        path: "/accounts/profile/",
      },
      {
        label: "Labores",
        path: "/accounts/profile/",
      },
      {
        label: "U. Medida",
        path: "/accounts/profile/",
      }
    ],
  },
  {
    id: 4,
    label: "Maestros Agrícolas",
    path: "/",
    children: [
      {
        label: "Fundos",
        path: "/accounts/profile/",
      },
      {
        label: "Cultivos",
        path: "/accounts/profile/",
      },
      {
        label: "Variedades",
        path: "/accounts/profile/",
      },
      {
        label: "Consumidores",
        path: "/accounts/profile/",
      }
    ],
  },
];

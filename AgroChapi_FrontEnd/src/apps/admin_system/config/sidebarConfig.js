import { GoHome } from "react-icons/go";
import { AiOutlineDashboard } from "react-icons/ai";
import { GrSystem } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { GrGrow } from "react-icons/gr";




export const accountsSidebarItems = [
  {
    id: 0,
    label: "Home",
    path: "/", // Ruta de la página de inicio
    icon: GoHome,   // Icono de Home
  },
  {
    id: 1,
    label: "Admin Dashboard",
    path: "/admin/dashboard", // Ruta de la página de inicio
    icon: AiOutlineDashboard,   // Icono de Home
  },
  {
    id: 2,
    label: "Sistema",
    path: "Sistema",
    icon: GrSystem,
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
    path: "Actividades",
    icon: FaTasks,
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
    path: "masters",
    icon: GrGrow,
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

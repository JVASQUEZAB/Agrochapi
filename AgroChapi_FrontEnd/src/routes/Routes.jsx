import { accountsRoutes } from "./accountsRoutes";
import { adminRoutes } from "./adminRoutes";



export const routes = [
    ...accountsRoutes,
    ...adminRoutes,
  ];
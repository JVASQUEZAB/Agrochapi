import { Route } from "react-router-dom";
import AdminLayouts from "../../layouts/admin_system/AdminLayout";
import Dashboard from "../../apps/admin_system/pages/Dashboard";
import UsersPage from "../../apps/admin_system/pages/Users";
import RolesPage from "../../apps/admin_system/pages/Roles";

const adminRoutes = (
  <Route path="/admin" element={<AdminLayouts />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="users" element={<UsersPage />} />
    <Route path="roles" element={<RolesPage />} />

  </Route>
);

export default adminRoutes;
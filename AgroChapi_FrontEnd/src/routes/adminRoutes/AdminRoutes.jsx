import { Route } from "react-router-dom";
import AdminLayouts from "../../layouts/admin_system/AdminLayout";
import Dashboard from "../../apps/admin_system/pages/Dashboard";


const adminRoutes = (
  <Route path="/admin" element={<AdminLayouts />}>
    <Route path="dashboard" element={<Dashboard />} />

  </Route>
);

export default adminRoutes;
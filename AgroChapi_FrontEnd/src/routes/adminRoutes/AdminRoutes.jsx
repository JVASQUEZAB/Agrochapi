import { Route } from "react-router-dom";
import AdminLayouts from "../../layouts/admin_system/AdminLayout";
import Dashboard from "../../apps/admin_system/pages/Dashboard";
import UsersPage from "../../apps/admin_system/pages/Users";
import RolesPage from "../../apps/admin_system/pages/Roles";
import ActivitiesPage from "../../apps/admin_system/pages/Activities";
import WorksPage from "../../apps/admin_system/pages/Works";
import CampaignsPage from "../../apps/admin_system/pages/Campaigns";
import CalendarPage from "../../apps/admin_system/pages/Calendar";
import CropsPage from "../../apps/admin_system/pages/Crops";
import GrowersPage from "../../apps/admin_system/pages/Growers";
import UMeasurementsPage from "../../apps/admin_system/pages/UMeasurements";
import ConsumersPage from "../../apps/admin_system/pages/Consumers";
import VarietiesPage from "../../apps/admin_system/pages/Varieties";





const adminRoutes = (
  <Route path="/admin" element={<AdminLayouts />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="users" element={<UsersPage />} />
    <Route path="roles" element={<RolesPage />} />
    <Route path="calendar" element={<CalendarPage />} />
    <Route path="campaign" element={<CampaignsPage />} />
    <Route path="activities" element={<ActivitiesPage />} />
    <Route path="works" element={<WorksPage />} />
    <Route path="u-m" element={<UMeasurementsPage />} />
    <Route path="growers" element={<GrowersPage />} />
    <Route path="crops" element={<CropsPage />} />
    <Route path="consumers" element={<ConsumersPage />} />
    <Route path="varieties" element={<VarietiesPage />} />
  </Route>
);

export default adminRoutes;
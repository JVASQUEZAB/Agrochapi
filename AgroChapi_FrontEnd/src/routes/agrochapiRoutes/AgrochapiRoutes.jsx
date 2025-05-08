import { Route } from "react-router-dom";
import AgrochapiLayout from "../../layouts/agrochapi/AgrochapiLayout";
import DashboardPage from "../../apps/agrochapi/pages/Dashboard";





const agrochapiRoutes = (
  <Route path="/agrochapi" element={<AgrochapiLayout />}>
    <Route path="dashboard" element={<DashboardPage />} />
  </Route>
);

export default agrochapiRoutes;
import { Route } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";
import Grid from "../../apps/main/Grid";
import accountsRoutes from "../accountsRoutes/AccountsRoutes";
import adminRoutes from "../adminRoutes/AdminRoutes";

const privateRoutes = (
  <Route element={<HomeLayout />}>
    <Route path="/" element={<Grid />} />
    {accountsRoutes}
    {adminRoutes}
  </Route>
);

export default privateRoutes;
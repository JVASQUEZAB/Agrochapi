import { Route } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Grid from "../apps/main/grid";
import accountsRoutes from "./accountsRoutes/AccountsRoutes";
import adminRoutes from "./adminRoutes/AdminRoutes";
import agrochapiRoutes from "./agrochapiRoutes/AgrochapiRoutes";

const privateRoutes = (
  <Route element={<HomeLayout />}>
    <Route path="/" element={<Grid />} />
    {accountsRoutes}
    {adminRoutes}
    {agrochapiRoutes}
  </Route>
);

export default privateRoutes;
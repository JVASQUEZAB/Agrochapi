import { Route } from "react-router-dom";
import AccountsLayout from "../../layouts/accounts/AccountsLayout";
import MyProfile from "../../apps/accounts/pages/MyProfile";
import ProfileInfo from "../../apps/accounts/pages/ProfileInfo"; // 👈 otra página

const accountsRoutes = (
  <Route path="/accounts" element={<AccountsLayout />}>
    <Route path="profile" element={<MyProfile />} />
    <Route path="profile-info" element={<ProfileInfo />} />
    
  </Route>
);

export default accountsRoutes;

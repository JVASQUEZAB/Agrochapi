import { Routes, Route } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import LoginPage from "./apps/auth/pages/Login";

import privateRoutes from "./routes/Routes";

function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<LoginLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Rutas privadas */}
      {privateRoutes}
    </Routes>
  );
}

export default App;

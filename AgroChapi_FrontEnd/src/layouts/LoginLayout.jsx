import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="h-screen">
      {/* No Navbar */}
      <Outlet />
    </div>
  );
};

export default LoginLayout;
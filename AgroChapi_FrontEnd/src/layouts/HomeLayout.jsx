import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Home } from "lucide-react";

const HomeLayout = () => {
  const isAuthenticated = !!localStorage.getItem("access_token");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-screen bg-[#F6F6F6]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;

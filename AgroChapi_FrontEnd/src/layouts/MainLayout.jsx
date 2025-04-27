import React, { useState, useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const MainLayout = ({
  children,
  sidebarItems = [],
  sidebarColor = "#EBECF4",
  navbarProps = {}
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {/* Navbar fija arriba */}
      <Navbar onMenuClick={toggleSidebar} {...navbarProps} />

      {/* Contenido general con padding top y padding left */}
      <div
        className="pt-16"
        style={{
          paddingLeft: !isMobile ? "16rem" : 0,
          height: "100vh", // usamos toda la pantalla
          overflow: "hidden", // evitamos scroll doble
          position: "relative"
        }}
      >
        <Sidebar
          items={sidebarItems}
          isOpen={isSidebarOpen}
          onToggle={toggleSidebar}
          isMobile={isMobile}
          sidebarColor={sidebarColor}
        />

        <main className="h-full overflow-y-auto bg-[#F6F6F6] p-4">
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;

import React from "react";
import SidebarItem from "./SideBarItem";

const Sidebar = ({ items = [], isOpen, onToggle, isMobile, sidebarColor }) => {
  return (
    <>
      {/* Overlay para móviles */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-16 left-0 h-[calc(100vh-4rem)] w-64 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{ backgroundColor: sidebarColor }}
      >
        {/* Contenedor scrollable */}
        <div className="h-full overflow-y-auto md:overflow-y-hidden md:hover:overflow-y-auto overflow-x-auto md:overflow-x-hidden md:hover:overflow-x-auto scrollbar">
          <div className="h-16 flex items-center justify-between px-4 md:hidden">
            <span className="text-lg font-bold">Menú</span>
            <button onClick={onToggle} className="text-lg">
              ✕
            </button>
          </div>
          <ul className="space-y-2 p-4 pt-0 md:pt-6">
            {items.map((item) => (
              <li key={item.path}>
                <SidebarItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;


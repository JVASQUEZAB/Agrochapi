import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const SidebarItem = ({ item }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;


  // Cierra los submenús si cambia la ruta
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const activeMain = location.pathname.startsWith(item.path);

  return (
    <div>
      {/* Ítem principal */}
      <div
        onClick={() => hasChildren && setOpen(!open)}
        className={`flex items-center justify-between px-4 py-2 text-sm rounded-lg transition-colors duration-100 cursor-pointer hover:bg-[#d9daeb]
          ${activeMain ? 'bg-[#d9daeb00] font-light text-black' : 'text-black hover:bg-[#d9daeb] hover:font-bold'}`}
      >
        <div className="flex items-center">
          {item.icon && <span className="mr-3">{item.icon}</span>}
          {hasChildren ? (
            <span>{item.label}</span>
          ) : (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'font-bold' : ''}`
              }
            >
              {item.label}
            </NavLink>
          )}
        </div>
        {hasChildren &&
          (open ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          ))}
      </div>

      {/* Submenús */}
      {hasChildren && open && (
        <ul className="ml-4 mt-1 border-l border-gray-500 pl-3 space-y-1">
          {item.children.map((child) => (
            <li key={child.path}>
              <NavLink
                to={child.path}
                className={({ isActive }) =>
                  `block px-2 py-1 text-sm rounded hover:bg-[#d9daeb] transition-colors duration-75 ${
                    isActive ? 'bg-[#d9daeb00] font-light text-black' : ''
                  }`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarItem;

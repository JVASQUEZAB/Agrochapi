import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import {
  SIDEBAR_ACTIVE_BG,
  SIDEBAR_HOVER_BG,
  SIDEBAR_ACTIVE_TEXT,
  SIDEBAR_HOVER_TEXT,
  SIDEBAR_ACTIVE_FONT,
  SIDEBAR_HOVER_FONT,
} from '../../styles/sidebarColors';

const SidebarItem = ({ item }) => {
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;

  const isChildActive = hasChildren
    ? item.children.some((child) => location.pathname.startsWith(child.path))
    : false;

  const isActive = location.pathname === item.path || isChildActive;

  const [open, setOpen] = useState(isChildActive);

  useEffect(() => {
    if (!isChildActive) {
      setOpen(false);
    }
  }, [location.pathname, isChildActive]);

  const activeClass = `${SIDEBAR_ACTIVE_BG} ${SIDEBAR_ACTIVE_FONT} ${SIDEBAR_ACTIVE_TEXT}`;
  const hoverClass = `${SIDEBAR_HOVER_BG} ${SIDEBAR_HOVER_FONT} ${SIDEBAR_HOVER_TEXT}`;

  return (
    <div>
      {hasChildren ? (
        <button
          onClick={() => setOpen(!open)}
          className={`w-full text-left flex items-center justify-between px-4 py-2 text-sm rounded-lg transition-colors duration-100 cursor-pointer
            ${isActive ? activeClass : `text-black ${hoverClass}`}`}
        >
          <div className="flex items-center">
            {item.icon && <item.icon className="mr-3" size={16} />}
            <span>{item.label}</span>
          </div>
          {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
      ) : (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `flex items-center justify-between px-4 py-2 text-sm rounded-lg transition-colors duration-300 cursor-pointer
            ${isActive ? activeClass : `text-black ${hoverClass}`}`
          }
        >
          <div className="flex items-center">
            {item.icon && <item.icon className="mr-3" size={16} />}
            <span>{item.label}</span>
          </div>
        </NavLink>
      )}

      {/* Submenús animados */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        {hasChildren && (
          <ul className="ml-4 mt-1 border-l border-gray-500 pl-3 space-y-1">
            {item.children.map((child, index) => (
              <li key={`${child.path}-${index}`}>
                <NavLink
                  to={child.path}
                  className={({ isActive }) =>
                    `block px-2 py-1 text-sm rounded transition-colors duration-75 ${
                      isActive
                        ? `${SIDEBAR_ACTIVE_BG} ${SIDEBAR_ACTIVE_FONT} ${SIDEBAR_ACTIVE_TEXT}`
                        : SIDEBAR_HOVER_BG
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
    </div>
  );
};

export default SidebarItem;
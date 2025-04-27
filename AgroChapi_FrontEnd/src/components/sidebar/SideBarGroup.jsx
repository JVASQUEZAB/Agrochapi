import React from 'react';
import SidebarItem from './SideBarItem';

const SidebarGroup = ({ group }) => {
  return (
    <div>
      <div className="text-gray-500 uppercase text-xs font-semibold px-4 py-2">{group.title}</div>
      <ul className="space-y-1">
        {group.items.map((item) => (
          <li key={item.path}>
            <SidebarItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarGroup;
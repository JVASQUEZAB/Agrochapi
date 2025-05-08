import React from 'react';
import { agrochapiSidebarItems } from '../../apps/agrochapi/config/sidebarConfig';
import MainLayout from '../MainLayout';
import { Outlet } from 'react-router-dom';

const AgrochapiLayout = () => {
  return (
    <MainLayout
      sidebarItems={agrochapiSidebarItems}
      sidebarColor="#EBECF4"
    >
      <Outlet />
      
    </MainLayout>
  );
};

export default AgrochapiLayout;

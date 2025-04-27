import React from 'react';
import { accountsSidebarItems } from '../../apps/admin_system/config/sidebarConfig';
import MainLayout from '../MainLayout';
import { Outlet } from 'react-router-dom';

const AccountsLayout = () => {
  return (
    <MainLayout
      sidebarItems={accountsSidebarItems}
      sidebarColor="#EBECF4"
    >
      <Outlet />
      
    </MainLayout>
  );
};

export default AccountsLayout;

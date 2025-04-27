import React from 'react';
import { Outlet } from 'react-router-dom'; // 👈 Importante para rutas hijas dinámicas
import { accountsSidebarItems } from '../../apps/accounts/config/sidebarConfig';
import MainLayout from '../MainLayout';

const AccountsLayout = () => {
  return (
    <MainLayout
      sidebarItems={accountsSidebarItems}
      sidebarColor="#EBECF4"
    >
      <Outlet /> {/* 👈 Aquí React Router va a renderizar la página correcta */}
    </MainLayout>
  );
};

export default AccountsLayout;

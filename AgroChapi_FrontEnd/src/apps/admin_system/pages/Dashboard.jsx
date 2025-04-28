// apps/accounts/pages/MyProfile.jsx
import React from 'react';
import CardUsers from '../components/dashboard/CardUsers';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
        <CardUsers />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {/* Aquí puedes agregar más tarjetas o componentes para el dashboard */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Card 1</h2>
          <p className="text-gray-700">Contenido de la tarjeta 1</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Card 1</h2>
          <p className="text-gray-700">Contenido de la tarjeta 1</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Card 1</h2>
          <p className="text-gray-700">Contenido de la tarjeta 1</p>
        </div>
      </div>
      <CardUsers />
    </div>
  );
};

export default Dashboard;

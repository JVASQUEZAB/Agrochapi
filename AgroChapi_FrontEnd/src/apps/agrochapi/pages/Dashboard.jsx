import React from 'react';



const DashboardPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
            
          <div className="md:w-3/3 space-y-8">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4">Dashboard</h2>
              <p>Bienvenido al panel de control Agrochapi..</p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4">Gráficos</h2>
              <p>Aquí se agregarán los graficos.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default DashboardPage;

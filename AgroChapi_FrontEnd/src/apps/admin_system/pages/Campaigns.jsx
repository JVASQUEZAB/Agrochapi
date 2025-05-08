import React from "react";

const CampaignsPage = () => {

return (
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-bold">Campañas</h1>
    <p className="text-gray-600">Aquí puedes gestionar las campañas de tu sistema.</p>
    <div className="flex flex-col gap-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Lista de Campañas</h2>
        {/* Aquí iría el componente que muestra la lista de campañas */}
      </div>
    </div>
  </div>
);
}

export default CampaignsPage;
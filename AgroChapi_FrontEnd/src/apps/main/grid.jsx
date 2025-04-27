import React, { useState, useEffect } from "react";
import API from "../../api/axios"; // Ruta del archivo axios.jsx según donde se aloje la cabecera de conexión
import modulesData from "../../api/modules.json"; // Importa el JSON directamente

import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate para redireccionar

const ModulesGrid = () => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate
  const [modules, setModules] = useState([]);

  useEffect(() => {
    setModules(modulesData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-40 px-20 py-20 w-full mt-0">
      {modules.map((module) => (
        <div key={module.id} className="flex flex-col items-center mt-20">
          {/* Contenedor circular */}
          <div className="w-32 h-32 flex items-center justify-center cursor-pointer rounded-full" style={{ backgroundColor: "#D3DAF0", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)" }}>
            <img
              src={`/modules/${module.logo}`}
              alt={module.name}
              className="w-20 h-20 object-contain"
              onClick={() => navigate( `${module.url}`)} // Redirige al módulo correspondiente al hacer clic)}
            />
          </div>
          {/* Nombre del módulo */}
          <p className="mt-4 text-xl font-semibold text-gray-800 text-center">{module.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ModulesGrid;

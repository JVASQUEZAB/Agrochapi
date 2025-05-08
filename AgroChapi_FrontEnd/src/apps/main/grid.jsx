import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ModulesGrid = () => {
  const navigate = useNavigate();
  const { modules } = useContext(AuthContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-40 px-20 py-20 w-full mt-0">
      {modules.map((module) => (
        <div key={module.id} className="flex flex-col items-center mt-20">
          <div className="w-32 h-32 flex items-center justify-center cursor-pointer rounded-full" style={{ backgroundColor: "#D3DAF0", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)" }}>
            <img
              src={`/modules/${module.logo}`}
              alt={module.name}
              className="w-20 h-20 object-contain"
              onClick={() => navigate(`${module.url}`)}
            />
          </div>
          <p className="mt-4 text-xl font-semibold text-gray-800 text-center">{module.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ModulesGrid;

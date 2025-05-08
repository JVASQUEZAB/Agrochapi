import React from "react";


const CalendarPage = () => {
  return (
    <div className="flex flex-col w-full h-full p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Calendario</h1>
      <div className="flex-grow bg-white shadow-md rounded-lg p-4">
        {/* Aquí puedes agregar el componente del calendario */}
        <p>Calendario aquí</p>
      </div>
    </div>
  );
}

export default CalendarPage;
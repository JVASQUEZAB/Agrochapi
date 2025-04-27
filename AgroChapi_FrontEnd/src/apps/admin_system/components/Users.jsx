import React from 'react';
import { MaterialReactTable } from 'material-react-table';

// Definir columnas
const columns = [
  {
    accessorKey: 'nombre', 
    header: 'Nombre',
  },
  {
    accessorKey: 'edad',
    header: 'Edad',
  },
  {
    accessorKey: 'ocupacion',
    header: 'Ocupación',
  },
];

// Definir datos
const data = [
  {
    nombre: 'Manuel',
    edad: 27,
    ocupacion: 'Analista de Datos',
  },
  {
    nombre: 'Ana',
    edad: 25,
    ocupacion: 'Ingeniera Agrónoma',
  },
];

const MiTabla = () => {
  return <MaterialReactTable columns={columns} data={data} />;
};

export default MiTabla;

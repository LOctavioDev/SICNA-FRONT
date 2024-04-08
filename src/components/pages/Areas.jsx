import React from 'react';

// Datos estáticos simulando áreas disponibles en TI
const areasData = [
  { id: 1, title: 'Laboratorios', description: 'Descripción del laboratorio' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  { id: 2, title: 'Salón', description: 'Descripción del salón' },
  // Puedes agregar más áreas aquí según sea necesario
];

export const Areas = () => {
  return (
    <div className='flex flex-col items-center justify-start h-full w-full bg-blue-100 text-black pb-10'>
      <div className='bg-gradient-to-r from-blue-500 to-blue-700 rounded-sm shadow-lg p-5 mb-8 w-full'>
        <h1 className='text-5xl font-extrabold text-center mb-6 text-white shadow-sm px-4 py-2 rounded-lg'>Áreas de Tecnologías de la Información</h1>

      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {areasData.map(area => (
          <div key={area.id} className='bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-110'>
            <h2 className='text-xl font-bold mb-2'>{area.title}</h2>
            <p className='text-gray-600'>{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

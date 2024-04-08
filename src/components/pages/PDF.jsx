import React, { useState } from 'react';
import jsPDF from 'jspdf';

export const PDF = () => {
  const [matricula, setMatricula] = useState('');
  const [consultaRealizada, setConsultaRealizada] = useState(false);
  const [tieneAdeudo, setTieneAdeudo] = useState(false);

  const handleChange = (event) => {
    setMatricula(event.target.value);
  };

  const handleConsultaClick = () => {
    // Aquí iría tu lógica de consulta al servidor para verificar los adeudos del alumno
    // Simulación: Si la matrícula contiene la letra 'A', se considera que tiene adeudo
    const tieneAdeudo = matricula.includes('A');
    setTieneAdeudo(tieneAdeudo);
    setConsultaRealizada(true);
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Agregar contenido al PDF
    if (tieneAdeudo) {
      doc.text('Tiene adeudo', 10, 10);
    } else {
      doc.text('No tiene adeudo', 10, 10);
    }

    // Guardar el PDF
    doc.save('consulta_adeudos.pdf');
  };

  return (
    <div className="flex flex-col items-center justify-start h-full w-full bg-blue-100 text-black pb-96">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-sm shadow-lg p-5 mb-8 w-full">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-white shadow-sm px-4 py-2 rounded-lg">
          Consulta de Adeudos
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <input
          type="text"
          value={matricula}
          onChange={handleChange}
          className="border border-gray-300 rounded-md py-2 px-4"
          placeholder="Ingresa tu matrícula"
        />
        <button
          onClick={handleConsultaClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Consultar
        </button>
      </div>
      {consultaRealizada && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">
            Resultado de la consulta:
          </h2>
          <p className="mt-2">
            {tieneAdeudo ? 'Tiene adeudo' : 'No tiene adeudo'}
          </p>
          <button
            onClick={generatePDF}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Generar PDF
          </button>
        </div>
      )}
    </div>
  );
};

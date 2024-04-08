import React from "react";

export const Perfil = () => {
  // Datos del laboratorista
  const laboratorista = {
    nombre: "Juan Pérez",
    matricula: "LAB123",
    laboratoriosAsignados: ["Laboratorio 1", "Laboratorio 3"],
    foto: "https://scontent.fmex19-1.fna.fbcdn.net/v/t39.30808-6/311456954_3299149836997422_5280307983202123821_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEGdUW83s4zbHAaEak4uUeEjgbaRojarIKOBtpGiNqsgjJGRtY0MXXA-GrOO4_rRRYXEQzOm71zvDMkeJOraRIH&_nc_ohc=8p1MbWjxMzEAb4PLAdv&_nc_ht=scontent.fmex19-1.fna&oh=00_AfCx1lM2E7uM-0x1s126UJ1bSH124Q-G4pDkpxGAQN2u6Q&oe=6616CE0A", // Aquí colocarías la URL de la imagen del laboratorista
    correo: "juan.perez@example.com",
    telefono: "1234567890",
    especialidad: "Química Analítica",
    fechaIngreso: "01/01/2018",
    estado: "Activo",
  };

  return (
    <div className="flex flex-col items-center justify-start h-full w-full bg-blue-100 text-black pb-52">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-sm shadow-lg p-5 mb-8 w-full">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-white shadow-sm px-4 py-2 rounded-lg">
          Bienvenido a tu perfil, {laboratorista.nombre}
        </h1>
      </div>
      <div className="bg-white rounded-lg shadow-md p-10 w-full max-w-3xl">
        <div className="flex items-center mb-6">
          <img
            src={laboratorista.foto}
            alt="Foto del laboratorista"
            className="w-44 h-44 rounded-full mr-6 transition duration-300 transform hover:scale-110"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">Información Personal</h2>
            <div className="grid grid-cols-2 gap-4">
              <p><strong>Nombre:</strong> {laboratorista.nombre}</p>
              <p><strong>Matrícula:</strong> {laboratorista.matricula}</p>
              <p><strong>Correo Electrónico:</strong> {laboratorista.correo}</p>
              <p><strong>Teléfono:</strong> {laboratorista.telefono}</p>
              <p><strong>Especialidad:</strong> {laboratorista.especialidad}</p>
              <p><strong>Fecha de Ingreso:</strong> {laboratorista.fechaIngreso}</p>
              <p><strong>Estado:</strong> {laboratorista.estado}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Laboratorios Asignados</h2>
          <ul>
            {laboratorista.laboratoriosAsignados.map((lab, index) => (
              <li key={index}>{lab}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

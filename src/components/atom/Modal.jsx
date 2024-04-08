import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-4">¡Bienvenido!</h2>
        <p className="text-lg text-gray-600">Gracias por iniciar sesión. Espero que tengas una experiencia increíble.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;

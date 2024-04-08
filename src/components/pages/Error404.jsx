import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-8">Error 404</h1>
      <p className="text-lg mb-8">La página que estás buscando no existe.</p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300"
      >
        Volver al Inicio
      </Link>
      <div className="mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-500 animate-bounce"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10a6 6 0 1112 0 6 6 0 01-12 0zm5-2a1 1 0 100-2 1 1 0 000 2zm1 5a1 1 0 11-2 0 1 1 0 012 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Error404;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const MainMenu = () => {
  const nav = useNavigate();

  const handleSubmit = () => {
    nav("/login");
    console.log(1);
  };

  return (
    <nav className="w-full">
      <ul className="flex flex-col text-gray-100 mr-3 ml-3">
        <Link to="/">
          <div className="flex items-center justify-center">
            <div className="text-4xl font-bold text-white border-2 border-white rounded-full h-16 w-16 flex items-center justify-center transition duration-500 transform hover:rotate-45">
              SICNA
            </div>
          </div>
        </Link>
        <li className="my-3">
          <Link
            className="menu-item py-5 px-7 block text-2xl hover:bg-blue-700 rounded transition duration-300 shadow-xl"
            to="/"
          >
            Inicio
          </Link>
        </li>
        <li className="my-3">
          <Link
            className="menu-item py-5 px-7 block text-2xl hover:bg-blue-700 rounded transition duration-300 shadow-xl"
            to="/areas"
          >
            Areas
          </Link>
        </li>
        <li className="my-3">
          <Link
            className="menu-item py-5 px-7 block text-2xl hover:bg-blue-700 rounded transition duration-300 shadow-xl"
            to="/perfil"
          >
            Perfil
          </Link>
        </li>
        <li className="my-3">
          <Link
            className="menu-item py-5 px-7 block text-2xl hover:bg-blue-700 rounded transition duration-300 shadow-xl"
            to="/generarpdf"
          >
            Generar PDF
          </Link>
        </li>
        <li className="my-3 mt-auto">
          <button
            className="menu-item py-4 px-24 block text-2xl hover:bg-red-600 bg-red-700 rounded transition duration-300 shadow-xl"
            type="submit"
            onClick={handleSubmit}
          >
            Salir
          </button>
        </li>
        {/* Agregar más elementos de menú aquí en el futuro */}
      </ul>
    </nav>
  );
};

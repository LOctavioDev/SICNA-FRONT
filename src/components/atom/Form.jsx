import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Form = () => {
  const nav = useNavigate();

  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError();
    const data = {
      name: e.target.name.value,
      password: e.target.password.value,
    };
    nav("/");
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">Bienvenido a SICNA</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Bienvenido, por favor ingresa tus datos.
      </p>
      <form onSubmit={handleSubmit} className="mt-8">
        <div>
          <label className="text-lg font-medium">Usuario</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Ingresa tu usuario"
            required
            name="name"
          />
        </div>

        <div>
          <label className="text-lg font-medium">Contraseña</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Ingresa tu contraseña"
            type="password"
            required
            name="password"
          />
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button className="font-medium text-base text-blue-500">
            Olvidó su Contraseña
          </button>
        </div>
        <div className="mt-8 flex-col gap-y-4">
          <button className="active:scale-[.95] active:duration-75 hover:scale-[1.02] ease-in-out transition-all py-3 px-3 rounded-xl bg-blue-500 text-white text-lg font-bold" type="submit">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

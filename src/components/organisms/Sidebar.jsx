import React from "react";
import { Link } from "react-router-dom";
import { MainMenu } from "../molecules/MainMenu";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-blue-800 text-gray-100 font-normal">
      <div className="flex flex-col justify-between h-full shadow-lg">
        <div className="mt-5">
          <MainMenu />
        </div>
        <div className="py-4 text-center">UTXJ 2024</div>
      </div>
    </div>
  );
};


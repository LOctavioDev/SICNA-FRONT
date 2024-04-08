import React from "react";
import { Sidebar } from "./components/organisms/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="relative flex h-screen overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 pt-0 pl-64 h-full">
        <div className="max-w-full mx-auto px-0 py-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

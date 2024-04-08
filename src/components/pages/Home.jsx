import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

export const Home = () => {
  const data = [
    { x: "Noviembre", y: 13 },
    { x: "Diciembre", y: 14 },
    { x: "Enero", y: 10 },
    { x: "Febrero", y: 15 },
    { x: "Marzo", y: 8 },
    { x: "Abril", y: 10 },
  ];

  return (
    <div className="flex flex-col items-center justify-start h-full w-full bg-blue-100 text-black pb-10">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-sm shadow-lg p-5 mb-8 w-full">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-white shadow-sm px-4 py-2  rounded-lg">
          Bienvenido al Sistema de Control de No Adeudo
        </h1>

        <p className="text-gray-600 text-center"></p>
      </div>

      <VictoryChart
        theme={VictoryTheme.material}
        width={600}
        height={300}
        domainPadding={{ x: 50 }}
      >
        <VictoryAxis tickValues={data.map((item) => item.x)} />
        <VictoryAxis dependentAxis />
        <VictoryBar
          data={data}
          x="x"
          y="y"
          animate={{
            duration: 1000,
            onLoad: { duration: 1000 },
          }}
        />
      </VictoryChart>
    </div>
  );
};

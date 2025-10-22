"use client";

import dynamic from "next/dynamic";

// Import dinámico del componente del mapa
const MapClient = dynamic(() => import("../components/MapClient"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-yellow-100 to-yellow-200 p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden relative">
        {/* Mapa */}
        <div className="p-4 relative">
          <MapClient />
          <div className="absolute top-10 left-10 bg-yellow-400 text-black font-semibold px-3 py-1 rounded-xl shadow">
            2.03 Km
          </div>
        </div>

        {/* Actividad */}
        <div className="bg-black text-white flex flex-col items-center p-4 rounded-t-3xl">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
              alt="Running"
              className="w-6 h-6"
            />
            <p className="font-semibold">Running</p>
          </div>
          <p className="text-sm text-gray-400">3000 meters per day</p>
          <div className="w-2/3 h-1 bg-gray-600 rounded-full mt-2">
            <div className="h-1 bg-yellow-400 rounded-full w-2/3"></div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="flex justify-around p-4">
          <div className="flex flex-col items-center">
            <p className="font-bold">2.03</p>
            <p className="text-sm text-gray-500">Kilometer</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">15</p>
            <p className="text-sm text-gray-500">Minutes</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">75</p>
            <p className="text-sm text-gray-500">Calories</p>
          </div>
        </div>
      </div>
    </main>
  );
}

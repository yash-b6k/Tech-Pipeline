import React from "react";

const TestInterface = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind CSS Test Interface
      </h1>

      {/* Color test boxes */}
      <div className="grid grid-cols-3 gap-4">
        <div className="w-24 h-24 bg-red-500 rounded-lg shadow-md"></div>
        <div className="w-24 h-24 bg-green-500 rounded-lg shadow-md"></div>
        <div className="w-24 h-24 bg-blue-500 rounded-lg shadow-md"></div>
        <div className="w-24 h-24 bg-yellow-400 rounded-lg shadow-md"></div>
        <div className="w-24 h-24 bg-purple-500 rounded-lg shadow-md"></div>
        <div className="w-24 h-24 bg-pink-500 rounded-lg shadow-md"></div>
      </div>

      {/* Flexbox test */}
      <div className="flex items-center justify-between bg-white shadow-lg p-4 rounded-xl w-full max-w-md">
        <div className="text-gray-700 font-medium">Flex Start</div>
        <div className="text-gray-700 font-medium">Center</div>
        <div className="text-gray-700 font-medium">Flex End</div>
      </div>

      {/* Sizing test */}
      <div className="bg-indigo-500 text-white p-4 rounded-lg w-1/2 text-center shadow-lg">
        This box is 50% width of the parent
      </div>

      {/* Button test */}
      <button className="px-6 py-3 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg hover:scale-105 transition-transform">
        Tailwind Button Test
      </button>
    </div>
  );
};

export default TestInterface;

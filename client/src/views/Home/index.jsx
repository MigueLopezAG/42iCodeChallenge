import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">42a Code Challenge</h1>
        <h3 className="text-lg mb-8 text-gray-600">Haz clic en uno de los botones para probar las funciones desarrolladas:</h3>
        <div className="flex flex-col items-center space-y-4">
          <button 
            className="bg-pink-700 hover:bg-pink-900 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-pink-500"
            onClick={() => navigate('/two-number-sum')}
          >
            Two Number Sum
          </button>
          <button 
            className="bg-emerald-700 hover:bg-emerald-900 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-emerald-500"
            onClick={() => navigate('/non-constructible-change')}    
          >
            Non-Constructible Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
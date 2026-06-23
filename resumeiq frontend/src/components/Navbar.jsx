
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold cursor-pointer" onClick={() => navigate('/dashboard')}>
          Resume<span className="text-yellow-300">IQ</span>
        </h1>
        <div className="flex gap-4">
          <button onClick={() => navigate('/dashboard')}
            className="text-white hover:text-yellow-300 font-medium transition">
            Dashboard
          </button>
          <button onClick={() => navigate('/analyze')}
            className="text-white hover:text-yellow-300 font-medium transition">
            Analyze
          </button>
          <button onClick={logout}
            className="bg-white text-purple-600 px-4 py-1 rounded-full font-medium hover:bg-yellow-300 transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
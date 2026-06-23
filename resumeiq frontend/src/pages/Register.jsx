
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../services/api';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authAPI.register(form);
      navigate('/login');
    } catch (err) {
      setError('Registration failed! Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-purple-700 to-blue-800"></div>

      {/* Floating circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-400 opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 left-20 w-20 h-20 bg-blue-300 opacity-20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-400 opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-300 opacity-20 rounded-full animate-bounce"></div>

      {/* Floating icons */}
      <div className="absolute top-16 left-40 text-6xl opacity-20 animate-bounce">🤖</div>
      <div className="absolute bottom-32 right-40 text-5xl opacity-20 animate-pulse">📄</div>
      <div className="absolute top-32 right-1/4 text-4xl opacity-20 animate-bounce">💼</div>
      <div className="absolute bottom-16 left-1/4 text-5xl opacity-20 animate-pulse">🎯</div>
      <div className="absolute top-1/2 right-10 text-4xl opacity-20 animate-bounce">📊</div>
      <div className="absolute top-1/2 left-10 text-4xl opacity-20 animate-pulse">✨</div>

      {/* Register Card */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl p-10 w-full max-w-md border border-white border-opacity-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Resume<span className="text-yellow-300">IQ</span></h1>
          <p className="text-purple-200 mt-2">Create your account</p>
        </div>

        {error && (
          <div className="bg-red-500 bg-opacity-20 text-red-200 border border-red-400 border-opacity-30 p-3 rounded-xl mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-purple-100 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-yellow-300 transition"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-purple-100 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-yellow-300 transition"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-purple-100 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-yellow-300 transition"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-300 text-purple-800 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition shadow-lg mt-2">
            {loading ? '⏳ Creating...' : '🎯 Create Account'}
          </button>
        </form>

        <p className="text-center text-purple-200 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-yellow-300 font-bold hover:underline">Login →</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
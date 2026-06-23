

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { analysisAPI } from '../services/api';

const Dashboard = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem('name');
  const userId = localStorage.getItem('userId');
  const [analyses, setAnalyses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalyses = async () => {
      try {
        const res = await analysisAPI.getUserAnalyses(userId);
        setAnalyses(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalyses();
  }, [userId]);

  const getScoreColor = (score) => {
    if (score >= 70) return 'text-green-500';
    if (score >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBg = (score) => {
    if (score >= 70) return 'bg-green-100 border-green-300';
    if (score >= 40) return 'bg-yellow-100 border-yellow-300';
    return 'bg-red-100 border-red-300';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Welcome */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold">Welcome back, {name}! 👋</h2>
          <p className="mt-2 text-purple-100">Track your resume analyses and improve your job match score</p>
          <button
            onClick={() => navigate('/analyze')}
            className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
            + Analyze New Resume
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <p className="text-gray-500">Total Analyses</p>
            <p className="text-4xl font-bold text-purple-600 mt-2">{analyses.length}</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <p className="text-gray-500">Best Match Score</p>
            <p className="text-4xl font-bold text-green-500 mt-2">
              {analyses.length > 0 ? Math.max(...analyses.map(a => a.matchScore)) : 0}%
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <p className="text-gray-500">Avg Quality Score</p>
            <p className="text-4xl font-bold text-blue-500 mt-2">
              {analyses.length > 0
                ? Math.round(analyses.reduce((a, b) => a + b.qualityScore, 0) / analyses.length)
                : 0}%
            </p>
          </div>
        </div>

        {/* Analysis History */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Analysis History</h3>
          {loading ? (
            <p className="text-center text-gray-400 py-8">Loading...</p>
          ) : analyses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No analyses yet!</p>
              <button
                onClick={() => navigate('/analyze')}
                className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                Start Analyzing
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {analyses.map((analysis) => (
                <div key={analysis.id} className={`border rounded-xl p-5 ${getScoreBg(analysis.matchScore)}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-700">Resume: {analysis.resume?.fileName}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        {new Date(analysis.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`text-3xl font-bold ${getScoreColor(analysis.matchScore)}`}>
                        {analysis.matchScore}%
                      </p>
                      <p className="text-gray-500 text-sm">Match Score</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                        style={{ width: `${analysis.matchScore}%` }}>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
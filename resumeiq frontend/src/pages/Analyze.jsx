
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { resumeAPI, analysisAPI } from '../services/api';

const Analyze = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!file || !jobDescription) {
      setError('Please upload resume and enter job description!');
      return;
    }
    setLoading(true);
    setError('');
    try {
      // Step 1: Upload resume
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);
      const uploadRes = await resumeAPI.upload(formData);
      const resumeId = uploadRes.data.id;

      // Step 2: Analyze
      const analysisRes = await analysisAPI.analyze(resumeId, userId, jobDescription);
      setResult(analysisRes.data);
    } catch (err) {
      setError('Something went wrong! Try again.');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 70) return 'text-green-500';
    if (score >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  const parseList = (str) => {
    try {
      return JSON.parse(str);
    } catch {
      return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Analyze Your Resume</h2>
        <p className="text-gray-500 mb-8">Upload your resume and paste the job description to get AI powered insights</p>

        {error && <div className="bg-red-100 text-red-600 p-4 rounded-xl mb-6">{error}</div>}

        {!result ? (
          <div className="bg-white rounded-2xl shadow p-8 space-y-6">

            {/* File Upload */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Upload Resume (PDF)</label>
              <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center hover:border-purple-500 transition">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                  id="fileInput"
                />
                <label htmlFor="fileInput" className="cursor-pointer">
                  <div className="text-5xl mb-3">📄</div>
                  {file ? (
                    <p className="text-purple-600 font-semibold">{file.name}</p>
                  ) : (
                    <>
                      <p className="text-gray-500">Click to upload PDF</p>
                      <p className="text-gray-400 text-sm mt-1">Max size: 10MB</p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Job Description</label>
              <textarea
                rows={6}
                placeholder="Paste the job description here... (Copy from LinkedIn, Naukri, etc.)"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition">
              {loading ? '🤖 AI Analyzing...' : '🚀 Analyze My Resume'}
            </button>
          </div>
        ) : (
          <div className="space-y-6">

            {/* Score Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <p className="text-gray-500 font-medium">Match Score</p>
                <p className={`text-6xl font-bold mt-3 ${getScoreColor(result.matchScore)}`}>
                  {result.matchScore}%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full"
                    style={{ width: `${result.matchScore}%` }}>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <p className="text-gray-500 font-medium">Quality Score</p>
                <p className={`text-6xl font-bold mt-3 ${getScoreColor(result.qualityScore)}`}>
                  {result.qualityScore}%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                  <div
                    className="bg-gradient-to-r from-green-400 to-teal-500 h-3 rounded-full"
                    style={{ width: `${result.qualityScore}%` }}>
                  </div>
                </div>
              </div>
            </div>

            {/* Missing Keywords */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">❌ Missing Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {parseList(result.missingKeywords).map((keyword, i) => (
                  <span key={i} className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Suggestions</h3>
              <ul className="space-y-3">
                {parseList(result.suggestions).map((suggestion, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <p className="text-gray-600">{suggestion}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setResult(null)}
                className="flex-1 border-2 border-purple-600 text-purple-600 py-3 rounded-xl font-semibold hover:bg-purple-50 transition">
                Analyze Another
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Go to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analyze;
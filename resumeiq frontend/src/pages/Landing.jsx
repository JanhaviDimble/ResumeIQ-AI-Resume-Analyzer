
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { icon: '🤖', title: 'AI Powered Analysis', desc: 'Advanced AI analyzes your resume against job descriptions in seconds' },
    { icon: '📊', title: 'Match Score', desc: 'Get an instant match percentage to know how well you fit the role' },
    { icon: '🔑', title: 'Missing Keywords', desc: 'Discover missing keywords that recruiters are looking for' },
    { icon: '💡', title: 'Smart Suggestions', desc: 'Get personalized tips to improve your resume for each job' },
    { icon: '📄', title: 'PDF Support', desc: 'Simply upload your PDF resume and let AI do the rest' },
    { icon: '📈', title: 'Track Progress', desc: 'Dashboard to track all your analyses and improvement over time' },
  ];

  const steps = [
    { step: '01', title: 'Upload Resume', desc: 'Upload your resume in PDF format', icon: '📤' },
    { step: '02', title: 'Paste Job Description', desc: 'Copy JD from LinkedIn, Naukri or any job portal', icon: '📋' },
    { step: '03', title: 'AI Analyzes', desc: 'Our AI engine analyzes and compares your profile', icon: '🤖' },
    { step: '04', title: 'Get Results', desc: 'Get match score, missing keywords and suggestions', icon: '🎯' },
  ];

  const quotes = [
    { text: "Your resume is your first impression. Make it count!", author: "Career Expert" },
    { text: "The right resume opens doors you never knew existed.", author: "HR Professional" },
    { text: "Don't just apply. Apply smart with AI powered insights.", author: "ResumeIQ" },
  ];

  const [currentQuote, setCurrentQuote] = React.useState(0);

  
// eslint-disable-next-line react-hooks/exhaustive-deps
React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">
            Resume<span className="text-blue-500">IQ</span>
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/login')}
              className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition">
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white py-24 px-6 relative overflow-hidden">
        {/* Background circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
            🚀 AI Powered Resume Analyzer
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
            Land Your Dream Job
            <span className="text-yellow-300"> Faster</span>
          </h1>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Upload your resume, paste the job description and get instant AI powered insights — match score, missing keywords and personalized suggestions!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate('/register')}
              className="bg-yellow-300 text-purple-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition shadow-lg">
             🎯 Register Now
            </button>
            <button
              onClick={() => navigate('/login')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition">
              Login →
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
            <div>
              <p className="text-4xl font-bold text-yellow-300">AI</p>
              <p className="text-purple-200 text-sm mt-1">Powered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-300">100%</p>
              <p className="text-purple-200 text-sm mt-1">Free to use</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-300">⚡</p>
              <p className="text-purple-200 text-sm mt-1">Instant Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-purple-50 py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl text-purple-300 mb-4">"</div>
          <p className="text-2xl font-medium text-gray-700 italic transition-all duration-500">
            {quotes[currentQuote].text}
          </p>
          <p className="text-purple-500 font-semibold mt-4">— {quotes[currentQuote].author}</p>
          <div className="flex justify-center gap-2 mt-6">
            {quotes.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentQuote(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${i === currentQuote ? 'bg-purple-600' : 'bg-purple-200'}`}>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Why Choose <span className="text-purple-600">ResumeIQ?</span></h2>
            <p className="text-gray-500 mt-4 text-lg">Everything you need to land your dream job</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition hover:-translate-y-1">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">How It <span className="text-purple-600">Works?</span></h2>
            <p className="text-gray-500 mt-4 text-lg">Get results in just 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center relative">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                  {s.icon}
                </div>
                <span className="text-purple-300 font-bold text-sm">{s.step}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-3/4 w-1/2 border-t-2 border-dashed border-purple-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Land Your Dream Job?</h2>
          <p className="text-purple-100 text-lg mb-8">Join thousands of job seekers who improved their resume with ResumeIQ</p>
          <button
            onClick={() => navigate('/register')}
            className="bg-yellow-300 text-purple-800 px-10 py-4 rounded-full font-bold text-xl hover:bg-yellow-400 transition shadow-lg">
            🚀 Register Now — It's Free!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
        <h3 className="text-white font-bold text-xl mb-2">Resume<span className="text-purple-400">IQ</span></h3>
        <p className="text-sm">AI Powered Resume Analyzer</p>
        <p className="text-xs mt-2">© 2026 ResumeIQ. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Landing;
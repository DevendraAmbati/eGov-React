import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(8); 

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 8000);

    return () => {
      clearInterval(countdownTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-blue-100 uppercase tracking-tighter">404</h1>
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-900 mt-4">
            Lost in Space?
          </p>
        </div>

        <h2 className="text-3xl font-light text-slate-700 mb-4">
          Page <span className="font-bold text-blue-900">Not Found</span>
        </h2>
        
        <p className="text-slate-500 mb-6 leading-relaxed">
          The link you followed may be broken, or the page may have been removed.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-10">
          <p className="text-blue-700 text-sm font-medium">
            🚀 Redirecting you to the homepage in 
            <span className="inline-block bg-blue-600 text-white w-6 h-6 rounded-full mx-2 animate-pulse">
              {countdown}
            </span> 
            seconds...
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
          >
            Go Home Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;

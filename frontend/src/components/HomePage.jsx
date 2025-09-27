import React, { useState } from 'react';

// ------------------------------------------------------------------------

const HomePage = ({ onAnalysisStart }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  // ------------------------------------------------------------------------

  const isValidGitHubUrl = (url) => {
    if (!url.includes('github.com')) {
      return false;
    }
    return true;
  };

  // ------------------------------------------------------------------------

  const extractRepoInfo = (url) => {
    let cleanUrl = url.replace('https://', '').replace('http://', '');
    cleanUrl = cleanUrl.replace('www.', '');
    const parts = cleanUrl.split('/');
    
    if (parts.length >= 3 && parts[0] === 'github.com') {
      const owner = parts[1];
      const repo = parts[2];
      return { owner, repo };
    }
    
    return null;
  };

  // ------------------------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) {
      setError('Please enter a GitHub repository URL.');
      return;
    }

    if (!isValidGitHubUrl(inputValue)) {
      setError('Please enter a valid GitHub repository URL (must contain github.com).');
      return;
    }

    const repoInfo = extractRepoInfo(inputValue);
    
    if (!repoInfo || !repoInfo.owner || !repoInfo.repo) {
      setError('Could not extract repository information. Please check the URL format.');
      return;
    }

    setError('');
    onAnalysisStart(repoInfo.owner, repoInfo.repo);
  };

  // ------------------------------------------------------------------------

  return (


    <div className="min-h-screen bg-transparent flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-3xl mx-auto text-center">
        
        {/* main header-------------------------------------------------------- */}
{/* main header-------------------------------------------------------- */}
<div className="mb-12">
  <div className="mb-6">
    <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-2 leading-none tracking-tight">
      Repo<span className="text-slate-600">Ray</span>
    </h1>
    <div className="flex items-center justify-center gap-3">
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
      <p className="text-lg font-semibold text-gray-500 uppercase tracking-wider">
        AI GitHub Analyzer
      </p>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
    </div>
  </div>
  
  <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
    Investigate any GitHub repository with <span className="font-semibold text-slate-600">AI-powered analysis</span>. 
    Get instant insights into any codebase in seconds!
  </p>
</div>

        {/* link ulr input-------------------------------------------------------- */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="https://github.com/username/repository-name"
              className="flex-grow p-4 rounded-lg bg-transparent backdrop-blur-sm text-slate-900 border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 focus:outline-none transition-all duration-200"
            />
            <button
              type="submit"
              className="bg-slate-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-slate-700 "
            >
              Analyze Repository
            </button>
          </form>

          {/* error message-------------------------------------------------------- */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mt-4">
              <p className="font-medium">{error}</p>
            </div>
          )}
        </div>

        {/* protip-------------------------------------------------------- */}
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <img 
                src="https://cdn.jsdelivr.net/npm/@tabler/icons@2.40.0/icons/bulb.svg" 
                alt="Tip" 
                className="w-5 h-5 text-gray-800"
              />
              <p className="text-gray-900 font-semibold">Pro Tip: Direct URL Analysis</p>
            </div>
            <p className="text-gray-700 ">
              For a quicker analysis, just replace <code className="bg-gray-200 text-black rounded px-1.5 py-0.5 font-semibold">github.com</code> with <code className="bg-gray-200 text-black rounded px-1.5 py-0.5 font-semibold">{window.location.hostname}</code> in a repository URL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HomePage;
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import SummaryPage from './components/SummaryPage';

// --------------------------------------------

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const [repositoryInfo, setRepositoryInfo] = useState({
    owner: '',
    repo: ''
  });

  // --------------------------------------------



  // --------------------------------------------

  const startAnalysis = (ownerName, repoName) => {
    setRepositoryInfo({
      owner: ownerName,
      repo: repoName
    });
    
    setCurrentPage('summary');
  };

  // --------------------------------------------

  return (
    <div className="min-h-screen relative">
      <video autoPlay loop muted plays Inline
        className="fixed w-full h-full object-cover">
        <source src="/vector2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

{/* ------------------------------------------------- */}
      
      <div className="relative z-10 min-h-screen text-gray-900 font-sans flex items-center justify-center p-4 sm:p-6 md:p-8">
        {currentPage === 'summary' ? (
          <SummaryPage 
            owner={repositoryInfo.owner} 
            repo={repositoryInfo.repo} 
          />
        ) : (
          <HomePage onAnalysisStart={startAnalysis} />
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------


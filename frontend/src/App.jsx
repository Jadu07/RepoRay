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

  // Handle URL parsing and browser navigation
  useEffect(() => {
    const handleUrlChange = () => {
      const currentPath = window.location.pathname;
      console.log('Current path:', currentPath); // Debug log
      
      const pathParts = currentPath.slice(1).split('/').filter(part => part.length > 0);
      console.log('Path parts:', pathParts); // Debug log
      
      if (pathParts.length === 2 && pathParts[0] && pathParts[1]) {
        const ownerFromUrl = pathParts[0];
        const repoFromUrl = pathParts[1];
        
        console.log('Found owner/repo in URL:', ownerFromUrl, repoFromUrl); // Debug log
        
        setRepositoryInfo({
          owner: ownerFromUrl,
          repo: repoFromUrl
        });
        
        setCurrentPage('summary');
      } else {
        // If URL doesn't match owner/repo pattern, show home page
        setCurrentPage('home');
      }
    };

    // Handle initial page load
    handleUrlChange();

    // Handle browser back/forward navigation
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // --------------------------------------------

  const startAnalysis = (ownerName, repoName) => {
    setRepositoryInfo({
      owner: ownerName,
      repo: repoName
    });
    
    setCurrentPage('summary');
    
    // Update URL without page reload
    window.history.pushState(null, '', `/${ownerName}/${repoName}`);
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


import React, { useState, useEffect } from 'react';
import { getRepositoryAnalysis } from '../services/api';
import RepoHeader from './SummaryHeader';

// ------------------------------------------------------

const AnalysisCard = ({ title, children }) => (
  <div className="bg-white/20 backdrop-blur-md rounded-xl shadow p-5 border border-gray-200 hover:scale-[1.005] transition">
    <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b border-gray-400 pb-2">
      {title}
    </h3>
    <div className="text-gray-500 ">{children}</div>
  </div>
);

// ------------------------------------------------------

const SummaryPage = ({ owner, repo }) => {
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');


  // ------------------------------------------------------

  useEffect(() => {
    if (!owner || !repo) return;

    setIsLoading(true);
    setErrorMessage('');

    getRepositoryAnalysis(owner, repo)
      .then(data => {
        setAnalysisResults(data);
        setIsLoading(false);
      })
      .catch(err => {
        setErrorMessage(err.message || "Could not analyze the repository. Please try again.");
        setIsLoading(false);
      });
  }, [owner, repo]);

  // ------------------------------------------------------

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center space-y-6 py-12">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg text-gray-700 animate-pulse">
            Our AI is reading through the code files...
          </p>
        </div>
      </div>
    );
  }
  
  // ------------------------------------------------------

  const repositoryUrl = `https://github.com/${owner}/${repo}`;

  return (
    <div className="w-full max-w-4xl mx-auto">
      
      {/* error from api -------------------------------------------- */}
      {errorMessage && (
        <div className="text-center bg-red-50 border border-red-200 text-red-800 p-6 rounded-lg mb-6">
          <p className="font-bold text-lg">Oops! Something went wrong</p>
          <p>{errorMessage}</p>
        </div>
      )}
      
      {/* if ok -------------------------------------------- */}
      {analysisResults && (
        <>
          <RepoHeader 
            repoName={analysisResults.repoName}
            repoDescription={analysisResults.repoDescription}
            owner={analysisResults.owner}
            repositoryUrl={repositoryUrl}
          />

          {/* analysis cards -------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <AnalysisCard title="◎ AI Project Summary">
                <p className="text-base leading-relaxed">{analysisResults.aiSummary.summary}</p>
              </AnalysisCard>
            </div>
            
            <AnalysisCard title="◉ Project Type">
              <p className="font-semibold text-lg">{analysisResults.aiSummary.type}</p>
            </AnalysisCard>
            
            <AnalysisCard title="◉ Programming Languages">
              <div className="flex flex-wrap gap-2">
                {analysisResults.aiSummary.languages?.map(language => (
                  <span 
                    key={language} 
                    className="bg-gray-100 border border-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </AnalysisCard>

            <AnalysisCard title=" ◉ Frameworks & Libraries">
              <div className="flex flex-wrap gap-2">
                {analysisResults.aiSummary.frameworks?.map(framework => (
                  <span 
                    key={framework} 
                    className="bg-gray-100 border border-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </AnalysisCard>

            <AnalysisCard title="◉ Other Technologies ">
              <div className="flex flex-wrap gap-2">
                {analysisResults.aiSummary.technologies?.map(technology => (
                  <span 
                    key={technology} 
                    className="bg-gray-100 border border-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </AnalysisCard>

            <div className="md:col-span-2">
              <AnalysisCard title="◎ Key Features">
                <ul className="list-disc list-inside space-y-1">
                  {analysisResults.aiSummary.features?.map(feature => 
                    <li key={feature}>{feature}</li>
                  )}
                </ul>
              </AnalysisCard>
            </div>

            <div className="md:col-span-2">
              <AnalysisCard title="◎ How to Set Up">
                <div className="bg-white/30 backdrop-blur-md border border-gray-200 p-4 rounded-md text-gray-800 font-mono text-sm whitespace-pre-wrap">
                  {analysisResults.aiSummary.setup}
                </div>
              </AnalysisCard>
            </div>

            <div className="md:col-span-2">
              <AnalysisCard title="◎ Who Can Use This & How">
                <p className="leading-relaxed">{analysisResults.aiSummary.usage}</p>
              </AnalysisCard>
            </div>
          </div>
        </>
      )}
    </div>
  );
};


export default SummaryPage;
import React from 'react';

// ------------------------------------------------------

const RepoHeader = ({ repoName, repoDescription, owner, repositoryUrl }) => {
  return (
    <div className="mb-8 p-8 bg-white/20 backdrop-blur-md rounded-xl shadow-sm border border-gray-100 flex flex-col gap-6">
      <a 
        href="/" 
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200 w-fit font-medium"
      >
        ← Back to Homepage
      </a>

      <div className="space-y-3">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
          {repoName}
        </h2>
        
        {repoDescription && (
          <p className="text-gray-600 text-lg leading-relaxed">
            {repoDescription}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 border border-gray-200"
        >
          <img 
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" 
            alt="GitHub" 
            className="w-4 h-4"
          />
          {owner}/{repoName}
        </a>

        <a
          href={`https://githubbox.com/${owner}/${repoName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 border border-gray-200"
        >
          <img 
            src="https://cdn.jsdelivr.net/npm/@tabler/icons@2.40.0/icons/player-play.svg" 
            alt="Play" 
            className="w-4 h-4"
          />
          Live Preview
        </a>

        <a
          href={`https://githubtree.mgks.dev/repo/${owner}/${repoName}/main/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 border border-gray-200"
        >
          <img 
            src="https://cdn.jsdelivr.net/npm/@tabler/icons@2.40.0/icons/folder.svg" 
            alt="Folder" 
            className="w-4 h-4"
          />
          Folder Structure
        </a>
      </div>
    </div>
  );
};

// ------------------------------------------------------

export default RepoHeader;
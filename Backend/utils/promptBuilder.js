function buildAnalysisPrompt(repositoryData) {
  const { repository, files, projectType } = repositoryData;

  let prompt = `Analyze this GitHub repository and provide detailed insights:

REPOSITORY: ${repository.name}
DESCRIPTION: ${repository.description || 'No description provided'}
LANGUAGE: ${repository.language || 'Unknown'}
TYPE: ${projectType}

IMPORTANT FILES ANALYZED:`;

  Object.entries(files).forEach(([filename, content]) => {
    prompt += `

=== ${filename} ===
${content.slice(0, 1500)}`;
  });

  prompt += `

Based on the actual code and files above, analyze this repository and return ONLY this JSON structure:

{
  "summary": "Write a detailed 3-4 line summary explaining what this project does, its main purpose, key features, and target users. Be specific and informative.",
  "type": "Project type (web app, mobile app, library, API, CLI tool, etc.)",
  "languages": ["Programming languages actually used"],
  "frameworks": ["Frameworks and libraries found in the code"],
  "technologies": ["Technologies, tools, databases mentioned"],
  "features": ["Key features and capabilities"],
  "setup": ["Clear setup instructions from README or package.json"],
  "usage": ["How to use this project"]
}

IMPORTANT:
- Write a comprehensive summary of at least 3 lines
- Only include information you can see in the actual files
- Be specific about what the project does and who would use it`;

  return prompt;
}

module.exports = { buildAnalysisPrompt };
async function getRepoInfo(owner, repo) {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      name: data.name,
      description: data.description,
      language: data.language,
      stars: data.stargazers_count,
      forks: data.forks_count,
      defaultBranch: data.default_branch
    };
  } catch {
    return null;
  }
}

async function getImportantFiles(owner, repo, branch = 'main') {
  const files = [
    'README.md','App.jsx','index.html','index.htm','package.json','index.js','main.js','app.js','tsconfig.json',
    'requirements.txt','Pipfile','setup.py','pyproject.toml',
    'pom.xml','build.gradle','build.gradle.kts',
    'Cargo.toml','go.mod','composer.json','Gemfile',
    'project.csproj','solution.sln','Makefile','Dockerfile'
  ];

  const results = {};
  for (const f of files) {
    const res = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${f}`);
    if (res.ok) results[f] = (await res.text()).slice(0, 2000);
  }

  return results;
}

function detectProjectType(files) {
  for (const file in files) {
    if (file.endsWith('.jsx')) return 'React project';
  }
  if (files['package.json']) return 'JavaScript/Node.js project';
  if (files['requirements.txt'] || files['Pipfile']) return 'Python project';
  if (files['index.html'] || files['index.htm']) return 'Web project';
  if (files['pom.xml']) return 'Java/Maven project';
  if (files['build.gradle']) return 'Java/Gradle project';
  if (files['Cargo.toml']) return 'Rust project';
  if (files['go.mod']) return 'Go project';
  if (files['composer.json']) return 'PHP project';
  if (files['Gemfile']) return 'Ruby project';
  if (files['.csproj']) return 'C#/.NET project';
  if (files['Makefile']) return 'C/C++ project';
  if (files['Dockerfile']) return 'Docker project';
  return 'Code Project';
}

async function analyzeRepository(owner, repo) {

  const repoInfo = await getRepoInfo(owner, repo);

  if (!repoInfo) throw new Error('Repository not found');
  const files = await getImportantFiles(owner, repo, repoInfo.defaultBranch);
  
  return {
    repository: repoInfo,
    files,
    projectType: detectProjectType(files),
    filesFound: Object.keys(files)
  };
}

module.exports = { analyzeRepository };

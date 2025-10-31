const SERVER_URL = 'https://reporay-backend.vercel.app/api';
// const SERVER_URL ='http://localhost:3001/api';
export const getRepositoryAnalysis = async (owner, repo) => {
  const res = await fetch(`${SERVER_URL}/summary/${owner}/${repo}`);
  if (!res.ok) {
    const { error } = await res.json();
    throw new Error(error || 'Repository analysis failed');
  }
  return res.json();
};

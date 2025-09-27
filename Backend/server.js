require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { analyzeRepository } = require('./utils/githubReader');
const { analyzeRepository: analyzeWithAI } = require('./utils/aiService');
const { buildAnalysisPrompt } = require('./utils/promptBuilder');

const app = express();
app.use(cors());

app.get('/api/summary/:user/:repo', async (req, res) => {
  const { user, repo } = req.params;

  try {
    const repositoryData = await analyzeRepository(user, repo);
    const prompt = buildAnalysisPrompt(repositoryData);
    const aiSummary = await analyzeWithAI(prompt);

    res.json({
      owner: user,
      repoName: repositoryData.repository.name,
      repoDescription: repositoryData.repository.description,
      aiSummary
    });

  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to analyze repository' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
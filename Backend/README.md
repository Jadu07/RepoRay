# Simple GitHub Repository Analyzer Backend

A minimal Node.js backend that analyzes GitHub repositories and generates AI-powered summaries.

## Files Structure

```
Backend/
├── server.js              # Main server file
├── utils/
│   ├── github.js          # GitHub API functions
│   ├── openrouter.js      # AI API functions
│   └── promptBuilder.js   # AI prompt builder
├── .env                   # Environment variables
└── package.json           # Dependencies
```

## What Each File Does

### `server.js`
- Main Express server
- Single API endpoint: `/api/summary/:user/:repo`
- Handles requests and responses

### `utils/github.js`
- `getRepoInfo()` - Gets basic repo info
- `getRepoFullStructure()` - Gets all files and folders
- `getFileContent()` - Gets content of specific files

### `utils/openrouter.js`
- `generateSummary()` - Sends prompt to AI and gets response

### `utils/promptBuilder.js`
- `buildPrompt()` - Creates the prompt for AI analysis

## Environment Variables

Create a `.env` file:
```
PORT=3001
GITHUB_TOKEN=your_github_token
OPENROUTER_API_KEY=your_openrouter_key
```

## How It Works

1. User requests `/api/summary/username/repository`
2. Server gets repo info from GitHub API
3. Server gets file structure and content
4. Server builds AI prompt with repo data
5. Server sends prompt to AI and gets summary
6. Server returns JSON response with analysis

## API Response

```json
{
  "repoName": "repository-name",
  "repoDescription": "repo description",
  "githubUrl": "https://github.com/user/repo",
  "stars": 0,
  "forks": 0,
  "filesAnalyzed": ["file1.js", "file2.py"],
  "repositoryStructure": {
    "totalFiles": 23,
    "totalFolders": 10,
    "directorySummary": {...}
  },
  "aiSummary": {
    "summary": "What the project does",
    "type": "web app",
    "languages": ["JavaScript", "Python"],
    "key_files": [...],
    "setup": ["step 1", "step 2"]
  }
}
```

## Run the Server

```bash
npm install
node server.js
```

Server runs on `http://localhost:3001`

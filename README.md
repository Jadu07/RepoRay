# RepoRay 🔍

**AI-Powered GitHub Repository Analyzer**

RepoRay is an intelligent web application that provides instant, comprehensive analysis of any public GitHub repository. Simply paste a GitHub URL and get detailed insights about the codebase, technology stack, setup instructions, and more—all powered by advanced AI.

## ✨ Features

- **🚀 Instant Analysis** - Get comprehensive repo insights in seconds
- **🤖 AI-Powered** - Advanced GPT-3.5-turbo integration for intelligent code analysis
- **📊 Tech Stack Detection** - Automatically identifies programming languages and frameworks
- **📝 Smart Summaries** - Generates project overviews, key features, and descriptions
- **⚡ Quick Access** - Replace `github.com` with `yashraj.tech` for instant redirection
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **🎯 Zero Configuration** - No account required, just paste and analyze

## 🚀 Quick Start

### Option 1: Direct URL Access
Replace `github.com` with `yashraj.tech` in any GitHub repository URL:
```
https://github.com/user/repo → https://yashraj.tech/user/repo
```

### Option 2: Web Interface
1. Visit the homepage
2. Paste any GitHub repository URL
3. Click "Analyze Repository"
4. Get instant AI-powered insights

## 🛠️ Technology Stack

### Frontend
- **React** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **GitHub API** - Repository data fetching
- **AI API** - AI analysis integration

### AI Integration
- **GPT-3.5-turbo** - Advanced language model for code analysis
- **Custom Prompts** - Specialized prompts for repository analysis

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- GitHub Personal Access Token
- AI API Key

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/RepoRay.git
cd RepoRay
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file in the Backend directory:
```env
GITHUB_TOKEN=your_github_personal_access_token
AI API_KEY=your_AI api_key
PORT=3001
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Start the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
RepoRay/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── HomePage.jsx
│   │   │   ├── SummaryPage.jsx
│   │   │   └── SummaryHeader.jsx
│   │   ├── services/        # API services
│   │   │   └── api.js
│   │   └── App.jsx          # Main app component
│   ├── public/              # Static assets
│   └── package.json
├── Backend/                 # Express backend
│   ├── utils/               # Utility functions
│   │   ├── githubReader.js  # GitHub API integration
│   │   ├── aiService.js     # AI AI service
│   │   └── promptBuilder.js # AI prompt construction
│   ├── server.js            # Express server
│   └── package.json
└── README.md
```

## 🔄 API Endpoints

### GET `/api/summary/:owner/:repo`
Analyzes a GitHub repository and returns AI-generated insights.

**Parameters:**
- `owner` - Repository owner username
- `repo` - Repository name

**Response:**
```json
{
  "summary": "AI-generated repository analysis...",
  "metadata": {
    "owner": "username",
    "repo": "repository-name",
    "analyzed_at": "2024-01-01T00:00:00Z"
  }
}
```

## 🎯 Usage Examples

### Basic Analysis
```javascript
// Using the web interface
1. Visit homepage
2. Enter: https://github.com/facebook/react
3. Click "Analyze Repository"
4. View comprehensive analysis
```

### Quick URL Method
```
Original: https://github.com/microsoft/vscode
Quick:    https://yashraj.tech/microsoft/vscode
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 🐛 Troubleshooting

### Common Issues

#### "Failed to fetch repository data"
- Check your GitHub token is valid and has proper permissions
- Ensure the repository URL is correct and public

#### "AI analysis failed"
- Verify your AI API key is correct
- Check if you have sufficient API credits

#### "CORS errors"
- Make sure both frontend and backend are running
- Check that the backend URL in frontend matches your setup

### Development Issues

#### Port conflicts
```bash
# Change backend port in .env file
PORT=3002

# Or kill existing processes
lsof -ti:3001 | xargs kill -9
```

## 📊 Performance

- **Average analysis time**: 3-5 seconds
- **Supported repository sizes**: Up to 10,000 files
- **Rate limiting**: GitHub API standard limits apply
- **Caching**: Repository data cached for optimal performance

## 🔒 Privacy & Security

- **No data storage**: Repository data is not permanently stored
- **Secure API calls**: All external API calls are encrypted
- **Rate limiting**: Built-in protection against abuse
- **Public repos only**: Only public repositories can be analyzed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GitHub** for repository data access
- **Tailwind CSS** for beautiful styling
- **React** community for excellent documentation

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/RepoRay/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/RepoRay/discussions)
- **Email**: yashrajchouhan14@gmail.com

## 🗺️ Roadmap

- [ ] Support for private repositories
- [ ] Repository comparison feature
- [ ] Export analysis as PDF/Markdown
- [ ] Integration with more AI models
- [ ] Real-time collaboration features
- [ ] API rate limiting dashboard
- [ ] Custom analysis templates

---

*Analyze any GitHub repository instantly with the power of AI* 🚀
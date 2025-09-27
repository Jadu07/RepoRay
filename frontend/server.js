import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Check if dist directory exists
const distPath = join(__dirname, 'dist');
const indexPath = join(distPath, 'index.html');

console.log('Current directory:', __dirname);
console.log('Dist path:', distPath);
console.log('Index path:', indexPath);
console.log('Dist exists:', existsSync(distPath));
console.log('Index exists:', existsSync(indexPath));

// Serve static files from dist directory
app.use(express.static(distPath));

// Add a test route for debugging
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    distExists: existsSync(distPath),
    indexExists: existsSync(indexPath),
    __dirname
  });
});

// Handle all routes by serving index.html (for React Router)
app.get('*', (req, res) => {
  console.log('Serving route:', req.path);
  
  if (existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ 
      error: 'index.html not found',
      distPath,
      indexPath,
      distExists: existsSync(distPath)
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Static files served from:', distPath);
});
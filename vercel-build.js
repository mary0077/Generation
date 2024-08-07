// vercel-build.js
const { execSync } = require('child_process');
execSync('npm install pg', { stdio: 'inherit' });

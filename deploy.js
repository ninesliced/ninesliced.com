import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const deployDir = path.join(__dirname, '.deploy-temp');
const pagesDir = path.join(__dirname, '.svelte-kit/output/prerendered/pages');
const clientDir = path.join(__dirname, '.svelte-kit/output/client');

// Helper function to recursively copy directory
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    const stat = fs.statSync(srcFile);
    if (stat.isDirectory()) {
      copyDirRecursive(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

// Clean up old deploy directory
if (fs.existsSync(deployDir)) {
  fs.rmSync(deployDir, { recursive: true });
}
fs.mkdirSync(deployDir, { recursive: true });

// Copy prerendered pages directly to root
console.log('Copying prerendered pages...');
copyDirRecursive(pagesDir, deployDir);

// Copy static files (CNAME, robots.txt) to root
console.log('Copying static files...');
const staticFiles = ['CNAME', 'robots.txt'];
staticFiles.forEach(file => {
  const src = path.join(clientDir, file);
  const dest = path.join(deployDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`  Copied ${file}`);
  }
});

// Verify files were copied
console.log('Files in deploy directory:');
const files = fs.readdirSync(deployDir);
files.forEach(f => console.log(`  ${f}`));

// Deploy with gh-pages
console.log('Deploying to GitHub Pages...');
execSync(`npx gh-pages -d "${deployDir}"`, { stdio: 'inherit' });

// Clean up
console.log('Cleaning up...');
fs.rmSync(deployDir, { recursive: true });

console.log('✓ Deployment complete!');

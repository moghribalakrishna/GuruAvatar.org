const fs = require('fs');
const path = require('path');

function concatenateDirectory(sourceDir, outputPath) {
  let concatenatedContent = '';
  let fileCount = 0;
  let structureInfo = '';

  // Exclude directories and files
  const excludePaths = new Set(['node_modules', '.next', '.git', 'concatenateProject.js', 'guruavatar-website*', 'package-lock.json', 'yarn.lock', 'public']);
  
  // Include only these file extensions
  const includeExtensions = new Set(['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.sass', '.less', '.json', '.md']);

  function processDirectory(currentPath, depth = 0) {
    const files = fs.readdirSync(currentPath);
    files.sort((a, b) => {
      const aPath = path.join(currentPath, a);
      const bPath = path.join(currentPath, b);
      const aIsDir = fs.statSync(aPath).isDirectory();
      const bIsDir = fs.statSync(bPath).isDirectory();
      if (aIsDir && !bIsDir) return -1;
      if (!aIsDir && bIsDir) return 1;
      return a.localeCompare(b);
    });

    files.forEach(file => {
      const fullPath = path.join(currentPath, file);
      const relativePath = path.relative(sourceDir, fullPath);
      const ext = path.extname(file).toLowerCase();

      if (excludePaths.has(file)) return;

      const stats = fs.statSync(fullPath);
      if (stats.isDirectory()) {
        structureInfo += `${'  '.repeat(depth)}${file}/\n`;
        processDirectory(fullPath, depth + 1);
      } else if (includeExtensions.has(ext)) {
        structureInfo += `${'  '.repeat(depth)}${file}\n`;
        try {
          let content = fs.readFileSync(fullPath, 'utf8');
          content = content
            .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1')
            .replace(/^\s*\n/gm, '')
            .replace(/\s+/g, ' ')
            .trim();
          if (content) {
            concatenatedContent += `\n// File: ${relativePath}\n${content}\n`;
            fileCount++;
          }
        } catch (err) {
          console.error(`Error reading file ${fullPath}:`, err);
        }
      }
    });
  }

  processDirectory(sourceDir);

  const header = `// Project Structure:\n/*\n${structureInfo}*/\n\n// Concatenated Content:\n`;
  const finalContent = header + concatenatedContent;

  try {
    fs.writeFileSync(outputPath, finalContent, 'utf8');
    console.log(`Successfully concatenated ${fileCount} files into ${outputPath}`);
    console.log(`Output file size: ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB`);
  } catch (err) {
    console.error(`Error writing to output file ${outputPath}:`, err);
  }
}

try {
  const outputPath = path.join(__dirname, 'guruavatar-website.min.txt');
  concatenateDirectory(__dirname, outputPath);
  console.log('Concatenation completed successfully');
} catch (err) {
  console.error('Error during concatenation:', err);
  process.exit(1);
}
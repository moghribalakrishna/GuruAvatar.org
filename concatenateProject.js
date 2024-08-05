const fs = require('fs');
const path = require('path');

function concatenateDirectory(sourceDir, outputPath, outputFormat) {
  let concatenatedContent = '';
  let fileCount = 0;

  // Exclude directories and files
  const excludePaths = ['node_modules', '.next', '.git', 'concatenateProject.js', 'guruavatar.js', 'package-lock.json', 'yarn.lock', 'public'];
  
  // Include only these file extensions
  const includeExtensions = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.sass', '.less', '.json', '.md'];

  function processDirectory(currentPath, relativePath = '') {
    try {
      const files = fs.readdirSync(currentPath);
      
      files.forEach(file => {
        const fullPath = path.join(currentPath, file);
        const relativeFilePath = path.join(relativePath, file);
        const ext = path.extname(file).toLowerCase();

        if (excludePaths.includes(file)) {
          console.log('Excluding (in exclude list):', fullPath);
          return;
        }

        const stats = fs.lstatSync(fullPath);

        if (stats.isDirectory()) {
          console.log('Processing directory:', fullPath);
          processDirectory(fullPath, relativeFilePath);
        } else if (includeExtensions.includes(ext) && stats.isFile()) {
          console.log('Adding file:', fullPath);
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            concatenatedContent += `\n\n// File: ${relativeFilePath}\n\n${content}`;
            fileCount++;
          } catch (readErr) {
            console.error(`Error reading file ${fullPath}:`, readErr);
          }
        } else {
          console.log('Excluding (not in include list):', fullPath);
        }
      });
    } catch (err) {
      console.error(`Error processing directory ${currentPath}:`, err);
    }
  }

  // Ensure we process the 'app' directory if it exists
  const appDir = path.join(sourceDir, 'app');
  if (fs.existsSync(appDir) && fs.lstatSync(appDir).isDirectory()) {
    console.log('Processing Next.js app directory:', appDir);
    processDirectory(appDir, 'app');
  } else {
    console.log('Next.js app directory not found, processing entire project');
    processDirectory(sourceDir);
  }

  if (fileCount === 0) {
    throw new Error('No files were processed. Check your include/exclude settings and directory structure.');
  }

  // Add appropriate wrapper based on the output format
  switch (outputFormat) {
    case '.ts':
      concatenatedContent = `// TypeScript Concatenated Project Files\n${concatenatedContent}`;
      break;
    case '.js':
      concatenatedContent = `// JavaScript Concatenated Project Files\n${concatenatedContent}`;
      break;
    case '.html':
      concatenatedContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concatenated Project Files</title>
</head>
<body>
    <h1>Concatenated Project Files</h1>
    <pre>${concatenatedContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
</body>
</html>`;
      break;
    default:
      throw new Error('Unsupported output format');
  }

  try {
    fs.writeFileSync(outputPath, concatenatedContent);
    console.log(`Concatenation completed. Output file: ${outputPath}`);
    console.log(`Total files processed: ${fileCount}`);
  } catch (writeErr) {
    console.error('Error writing output file:', writeErr);
    throw writeErr;
  }
}

// Define the source directory and output file
const sourceDir = path.join(__dirname, '.');
const outputFormat = '.js'; // Change this to '.ts' or '.html' as needed
const outputFilePath = path.join(__dirname, `guruavatar${outputFormat}`);

// Call the function to concatenate the directory
try {
  concatenateDirectory(sourceDir, outputFilePath, outputFormat);
  console.log('Concatenation completed successfully');
  process.exit(0); // Exit the process successfully
} catch (err) {
  console.error('Error during concatenation:', err);
  process.exit(1); // Exit the process with an error code
}
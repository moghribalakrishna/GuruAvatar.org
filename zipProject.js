const fs = require('fs');
const path = require('path');
const archiver = require('archiver'); // Import archiver

// Function to zip the directory
function zipDirectory(sourceDir, outPath) {
  const archive = archiver('zip', { zlib: { level: 9 } }); // Create an instance of archiver
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    stream.on('close', () => {
      console.log('Stream closed');
      resolve();
    });

    stream.on('end', () => {
      console.log('Stream ended');
    });

    stream.on('error', err => {
      console.error('Stream error:', err);
      reject(err);
    });

    archive.on('error', err => {
      console.error('Archiver error:', err);
      reject(err);
    });

    archive.pipe(stream);

    // Exclude directories and files
    const excludePaths = ['node_modules', '.next', '.git', 'guruavatar.zip', 'zipProject.js'];
    const mediaExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.mp4', '.avi', '.mov', '.mkv'];

    fs.readdirSync(sourceDir).forEach(file => {
      const fullPath = path.join(sourceDir, file);
      const ext = path.extname(file).toLowerCase();

      if (!excludePaths.includes(file) && !mediaExtensions.includes(ext)) {
        if (fs.lstatSync(fullPath).isDirectory()) {
          console.log('Adding directory:', fullPath);
          archive.directory(fullPath, file);
        } else {
          console.log('Adding file:', fullPath);
          archive.file(fullPath, { name: file });
        }
      } else {
        console.log('Excluding:', fullPath);
      }
    });

    archive.finalize().then(() => {
      console.log('Archiving finalized');
    }).catch(err => {
      console.error('Error during archiving finalization:', err);
      reject(err);
    });
  });
}

// Define the source directory and output file
const sourceDir = path.join(__dirname, '.');
const outputFilePath = path.join(__dirname, 'guruavatar.zip');

// Call the function to zip the directory
zipDirectory(sourceDir, outputFilePath)
  .then(() => {
    console.log('Zipping completed successfully');
    process.exit(0); // Exit the process successfully
  })
  .catch(err => {
    console.error('Error during zipping:', err);
    process.exit(1); // Exit the process with an error code
  });
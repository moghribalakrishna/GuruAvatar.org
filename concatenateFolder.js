const fs = require('fs');
const path = require('path');

function concatenateFiles(folderPath) {
    let concatenatedContent = '';
    let fileCount = 0;
    let structureInfo = '';

    function processDirectory(dir) {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const relativePath = path.relative(folderPath, fullPath);
            
            if (fs.statSync(fullPath).isDirectory()) {
                structureInfo += `${relativePath}/\n`;
                processDirectory(fullPath);
            } else {
                structureInfo += `${relativePath}\n`;
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
        }
    }

    processDirectory(folderPath);

    const header = `// Folder Structure:\n/*\n${structureInfo}*/\n\n// Concatenated Content:\n`;
    const finalContent = header + concatenatedContent;

    const folderName = path.basename(folderPath);
    const outputPath = path.join(process.cwd(), `guruavatar_concat_folder_${folderName}.txt`);

    try {
        fs.writeFileSync(outputPath, finalContent, 'utf8');
        console.log(`Successfully concatenated ${fileCount} files into ${outputPath}`);
        console.log(`Output file size: ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB`);
    } catch (err) {
        console.error(`Error writing to output file ${outputPath}:`, err);
    }
}

// Main execution
try {
    const folderPath = process.argv[2];

    if (!folderPath) {
        throw new Error('Please provide the folder path as an argument.');
    }

    concatenateFiles(folderPath);
    console.log('Concatenation completed successfully');
} catch (err) {
    console.error('Error during concatenation:', err);
    process.exit(1);
}
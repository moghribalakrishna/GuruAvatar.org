const fs = require('fs');
const path = require('path');

function findRelevantFiles(sourceDir, urlName) {
    const relevantFiles = new Set();
    const appDir = path.join(sourceDir, 'app');
    const componentsDir = path.join(sourceDir, 'app', 'components');

    // Find the main page file
    const pageFile = findPageFile(appDir, urlName);
    if (pageFile) {
        relevantFiles.add(pageFile);
        addDependencies(pageFile, relevantFiles, sourceDir);
    }

    // Add layout.tsx and page.tsx from the app directory
    const layoutFile = path.join(appDir, 'layout.tsx');
    if (fs.existsSync(layoutFile)) {
        relevantFiles.add(layoutFile);
        addDependencies(layoutFile, relevantFiles, sourceDir);
    }

    const rootPageFile = path.join(appDir, 'page.tsx');
    if (fs.existsSync(rootPageFile)) {
        relevantFiles.add(rootPageFile);
        addDependencies(rootPageFile, relevantFiles, sourceDir);
    }

    return Array.from(relevantFiles);
}

function findPageFile(appDir, urlName) {
    const possibleFiles = [
        path.join(appDir, `${urlName}`, 'page.tsx'),
        path.join(appDir, `${urlName}.tsx`),
        path.join(appDir, `${urlName}`, 'page.js'),
        path.join(appDir, `${urlName}.js`)
    ];

    for (const file of possibleFiles) {
        if (fs.existsSync(file)) {
            return file;
        }
    }

    return null;
}

function addDependencies(file, relevantFiles, sourceDir) {
    const content = fs.readFileSync(file, 'utf8');
    const importRegex = /import\s+.*?from\s+['"](.+?)['"]/g;
    let match;

    while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        let fullPath;

        if (importPath.startsWith('.')) {
            fullPath = path.resolve(path.dirname(file), importPath);
        } else if (importPath.startsWith('@')) {
            // Handle path aliases (assuming @ is aliased to the root of the project)
            fullPath = path.join(sourceDir, importPath.slice(1));
        } else {
            // Skip external dependencies
            continue;
        }

        const extensions = ['.js', '.jsx', '.ts', '.tsx'];
        for (const ext of extensions) {
            const pathWithExt = fullPath + ext;
            if (fs.existsSync(pathWithExt) && !relevantFiles.has(pathWithExt)) {
                relevantFiles.add(pathWithExt);
                addDependencies(pathWithExt, relevantFiles, sourceDir);
                break;
            }
        }
    }
}

function concatenateRelevantFiles(sourceDir, outputPath, urlName) {
    const relevantFiles = findRelevantFiles(sourceDir, urlName);
    let concatenatedContent = '';
    let fileCount = 0;
    let structureInfo = '';

    relevantFiles.forEach(file => {
        const relativePath = path.relative(sourceDir, file);
        structureInfo += `${relativePath}\n`;

        try {
            let content = fs.readFileSync(file, 'utf8');
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
            console.error(`Error reading file ${file}:`, err);
        }
    });

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

// Main execution
try {
    const sourceDir = process.cwd();
    const urlName = process.argv[2];

    if (!urlName) {
        throw new Error('Please provide a URL name as an argument.');
    }

    const outputPath = path.join(sourceDir, `guruavatar_concat_url_${urlName}.txt`);
    concatenateRelevantFiles(sourceDir, outputPath, urlName);
    console.log('Concatenation completed successfully');
} catch (err) {
    console.error('Error during concatenation:', err);
    process.exit(1);
}
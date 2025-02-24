import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

async function findMarkdownFiles(dir) {
    let results = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results = results.concat(await findMarkdownFiles(fullPath));
        } else if (entry.name === 'index.md' || entry.name === 'index.mdx') {
            results.push(path.dirname(fullPath));
        }
    }
    return Array.from(new Set(results)); // Remove duplicate folders
}

async function processFiles() {
    const rootDir = process.cwd();
    const folders = await findMarkdownFiles(rootDir);
    
    for (const folder of folders) {
        try {
            const indexFilePath = path.join(folder, 'index.md');
            const indexMdxFilePath = path.join(folder, 'index.mdx');
            
            let content;
            if (await fs.stat(indexFilePath).catch(() => false)) {
                content = await fs.readFile(indexFilePath, 'utf8');
            } else if (await fs.stat(indexMdxFilePath).catch(() => false)) {
                content = await fs.readFile(indexMdxFilePath, 'utf8');
            } else {
                console.warn(`Skipping ${folder}, no index.md or index.mdx found`);
                continue;
            }
            
            const { data } = matter(content);
            if (!data.date) {
                console.warn(`Skipping ${folder}, no date found`);
                continue;
            }
            
            const dateObj = new Date(data.date);
            const dateString = dateObj.toISOString().split('T')[0]; // Ensure proper formatting
            const [year, month, day] = dateString.split('-');
            const newDir = path.join(rootDir, year, month, day);
            const newFolderPath = path.join(newDir, path.basename(folder));
            
            await fs.mkdir(newDir, { recursive: true });
            await fs.rename(folder, newFolderPath);
            console.log(`Moved: ${folder} -> ${newFolderPath}`);
        } catch (error) {
            console.error(`Error processing ${folder}:`, error);
        }
    }
}

processFiles().catch(console.error);

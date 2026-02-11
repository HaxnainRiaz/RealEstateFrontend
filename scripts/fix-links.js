const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

const folders = ['app', 'components'];

folders.forEach(folder => {
    const absoluteFolder = path.resolve(process.cwd(), folder);
    if (!fs.existsSync(absoluteFolder)) return;

    walk(absoluteFolder, (filePath) => {
        if (!filePath.endsWith('.jsx')) return;

        let content = fs.readFileSync(filePath, 'utf8');

        // Match <Link but not imported
        if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
            console.log(`Fixing Link import in: ${filePath}`);

            // Add import after first line (usually "use client" or other imports)
            const lines = content.split('\n');
            let insertIdx = 0;

            if (lines[0].includes('"use client"')) {
                insertIdx = 1;
            }

            lines.splice(insertIdx, 0, "import Link from 'next/link';");
            fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
        }
    });
});

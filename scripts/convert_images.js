const fs = require('fs');
const path = require('path');

// Check for sharp library
try {
    var sharp = require('sharp');
} catch (e) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: "sharp" library is not installed.');
    console.error('Please run the following commands in your terminal:');
    console.error('npm init -y');
    console.error('npm install sharp');
    process.exit(1);
}

const assetsDir = path.join(__dirname, '../Assets');

if (!fs.existsSync(assetsDir)) {
    console.error(`\x1b[31mError: Assets directory not found at ${assetsDir}\x1b[0m`);
    process.exit(1);
}

console.log(`Starting scan of: ${assetsDir}`);

function processDirectory(directory) {
    fs.readdir(directory, { withFileTypes: true }, (err, entries) => {
        if (err) return console.error(`Unable to scan directory ${directory}:`, err);

        console.log(`Scanning ${path.basename(directory)}... Found ${entries.length} items.`);

        entries.forEach((entry) => {
            const fullPath = path.join(directory, entry.name);

            if (entry.isDirectory()) {
                console.log(`Entering subdirectory: ${entry.name}`);
                processDirectory(fullPath);
            } else {
                const ext = path.extname(entry.name).toLowerCase();
                if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                    const outputFile = path.join(directory, path.parse(entry.name).name + '.webp');

                    // Skip if WebP exists and is newer than the source image
                    if (fs.existsSync(outputFile)) {
                        const srcStat = fs.statSync(fullPath);
                        const destStat = fs.statSync(outputFile);
                        if (destStat.mtime > srcStat.mtime) {
                            console.log(`Skipped (Up to date): ${entry.name}`);
                            return;
                        }
                    }

                    sharp(fullPath)
                        .webp({ quality: 80 })
                        .toFile(outputFile)
                        .then(() => console.log(`\x1b[32mConverted:\x1b[0m ${entry.name}`))
                        .catch(err => console.error(`\x1b[31mFailed to convert ${entry.name}:\x1b[0m`, err));
                }
            }
        });
    });
}

processDirectory(assetsDir);
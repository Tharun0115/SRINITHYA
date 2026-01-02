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

const assetsDir = path.join(__dirname, 'Assets');

console.log(`Scanning directory: ${assetsDir}...`);

fs.readdir(assetsDir, (err, files) => {
    if (err) return console.error('Unable to scan directory:', err);

    files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
            const inputFile = path.join(assetsDir, file);
            const outputFile = path.join(assetsDir, path.basename(file, ext) + '.webp');

            sharp(inputFile)
                .webp({ quality: 80 })
                .toFile(outputFile)
                .then(() => console.log(`\x1b[32mConverted:\x1b[0m ${file} -> ${path.basename(outputFile)}`))
                .catch(err => console.error(`\x1b[31mError converting ${file}:\x1b[0m`, err));
        }
    });
});
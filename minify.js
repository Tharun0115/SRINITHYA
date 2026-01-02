const fs = require('fs');
const path = require('path');

// Check for required libraries
try {
    var Terser = require('terser');
    var CleanCSS = require('clean-css');
} catch (e) {
    console.error('\x1b[31m%s\x1b[0m', 'Error: Minification libraries not installed.');
    console.error('Please run: npm install terser clean-css');
    process.exit(1);
}

const files = [
    { type: 'js', name: 'navbar.js' },
    { type: 'js', name: 'search.js' },
    { type: 'js', name: 'compare.js' },
    { type: 'js', name: 'tailwind-config.js' },
    { type: 'css', name: 'style.css' }
];

(async () => {
    console.log('Starting minification...');

    for (const file of files) {
        const inputPath = path.join(__dirname, file.name);
        const ext = path.extname(file.name);
        const baseName = path.basename(file.name, ext);
        const outputPath = path.join(__dirname, `${baseName}.min${ext}`);

        if (!fs.existsSync(inputPath)) {
            console.warn(`Skipping ${file.name}: File not found.`);
            continue;
        }

        try {
            const content = fs.readFileSync(inputPath, 'utf8');
            let minified = '';

            if (file.type === 'js') {
                const result = await Terser.minify(content);
                if (result.error) throw result.error;
                minified = result.code;
            } else if (file.type === 'css') {
                const result = new CleanCSS().minify(content);
                if (result.errors.length > 0) throw new Error(result.errors.join(', '));
                minified = result.styles;
            }

            fs.writeFileSync(outputPath, minified);
            console.log(`\x1b[32mMinified:\x1b[0m ${file.name} -> ${path.basename(outputPath)}`);
        } catch (err) {
            console.error(`\x1b[31mError minifying ${file.name}:\x1b[0m`, err.message);
        }
    }
})();
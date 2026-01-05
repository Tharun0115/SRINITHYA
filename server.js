const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Main Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
});

// Dynamic Route for Product Details
// This allows accessing /Product_details/vibrators instead of /Product_details/vibrators.html
app.get('/Product_details/:page', (req, res) => {
    const page = req.params.page;
    const fileName = page.endsWith('.html') ? page : `${page}.html`;
    res.sendFile(path.join(__dirname, 'Product_details', fileName));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
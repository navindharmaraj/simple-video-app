const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve media files
app.use('/media', express.static(path.join(__dirname, 'media')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Listen on port 3000
app.listen(3000, () => console.log('Server running on http://localhost:3000'));

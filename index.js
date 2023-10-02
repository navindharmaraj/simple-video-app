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

// Health Check Endpoint
app.get('/health', (req, res) => {
    // You can perform any checks here to verify the health of your application
    // For example, checking the status of your database connection.
    // If everything is ok, send a status code 200
    res.status(200).send('OK');
  });

// Listen on port 3000
app.listen(3000, () => console.log('Server running on http://localhost:3000'));

const express = require('express');
const path = require('path');
const app = express();

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'build')));

// API route to send the message
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

// Serve the React app (fallback route)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

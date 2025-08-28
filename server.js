const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Cloud Run! - Auto Deploy Test',
    timestamp: new Date().toISOString(),
    version: 'v1.1.0',
    deployedAt: 'GitHub Actions Auto Deploy'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.get('/test', (req, res) => {
  res.json({
    message: 'Test endpoint working!!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
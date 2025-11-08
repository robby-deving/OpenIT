// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


// Load environment variables
dotenv.config();

// Initialize the Express application
const app = express();
app.set('trust proxy', true)
app.disable('x-powered-by');


app.use((req, res) => {
  logger.warn('Route not found', {
    url: req.url,
    method: req.method,
    ip: req.ip
  });

  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

module.exports = app;
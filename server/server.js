const app = require('./app');
const dotenv = require('dotenv');
const logger = require('./src/utils/logger.js');
const router = require( './src/routes/router.js');
const express = require('express');

dotenv.config();
app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('🌍 Earthquake Safety API is running...');
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
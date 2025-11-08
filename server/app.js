const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('./src/utils/logger.js');
const mainRouter = require('./src/routes/router.js'); 

dotenv.config();

const app = express();
app.set('trust proxy', true);
app.disable('x-powered-by');

app.use(cors());
app.use(express.json());


app.use('/api', mainRouter); 

app.get('/', (req, res) => {
    res.send('🌍 Earthquake Safety API is running...');
});

app.use((req, res) => {
    logger.warn('Route not found', { url: req.url, method: req.method, ip: req.ip });
    res.status(404).json({ success: false, message: 'Route not found' });
});

module.exports = app;

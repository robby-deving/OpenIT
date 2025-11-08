// router.js
const express = require('express');
const locationsRouter = require('./locations.route.js'); // Assuming this file exports an Express Router
const router = express.Router();

// Mount routes
router.use('/locations', locationsRouter);

module.exports = router; // Export the main router for use in app.js or another router
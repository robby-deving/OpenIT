const express = require('express');
const { getDashboardData } = require('../controllers/dashboard.controller.js');

const router = express.Router();

router.get('/:incident_types_id', getDashboardData);

module.exports = router;
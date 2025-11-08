// router.js
const express = require('express');
const locationsRouter = require('./locations.route.js'); 
const notificationsRouter = require('./notifications.route.js');
const incidentRouter = require('./incident.route.js');
const dashboardRouter = require('./dashboard.route.js');

const router = express.Router();
router.use('/locations', locationsRouter);
router.use('/notifications', notificationsRouter);
router.use('/incidents', incidentRouter);
router.use('/dashboard', dashboardRouter)

module.exports = router;
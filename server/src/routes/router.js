// router.js
const express = require('express');
const locationsRouter = require('./locations.route.js'); 
const notificationsRouter = require('./notifications.route.js');


const router = express.Router();
router.use('/locations', locationsRouter);
router.use('/notifications', notificationsRouter);


module.exports = router;
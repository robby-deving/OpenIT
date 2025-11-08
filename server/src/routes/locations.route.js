const express = require('express');
const {
  getLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
} = require ('../controllers/locations.controller.js');

const router = express.Router();

// CRUD routes
router.get('/', getLocations);          // GET all
router.get('/:id', getLocationById);    // GET one
router.post('/', createLocation);       // CREATE
router.put('/:id', updateLocation);     // UPDATE
router.delete('/:id', deleteLocation);  

module.exports = router;
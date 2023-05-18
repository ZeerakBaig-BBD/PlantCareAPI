const express = require('express');
const router = express.Router();
const PlantController = require('../controller/plantController');
const authController = require("../controller/authenticationController");

router.get('/', authController.auth, PlantController.index);

router.get('/list', authController.auth, PlantController.getPlants);

router.get('/search/:query', authController.auth, PlantController.getByName);

module.exports = router;

const express = require('express');
const router = express.Router();
const WeatherController = require('../controller/weatherController');
const authController = require("../controller/authenticationController");

router.get('/', authController.auth,  WeatherController.index);

module.exports = router;
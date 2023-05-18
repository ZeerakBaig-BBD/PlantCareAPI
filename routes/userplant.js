const express = require('express');
const router = express.Router();
const UserPlantController = require('../controller/userplantController');
const authController = require("../controller/authenticationController");

router.get('/', authController.auth, UserPlantController.index);

router.post('/add', authController.auth, UserPlantController.postAddPlant);

router.post('/remove', authController.auth, UserPlantController.postRemovePlant);

module.exports = router;

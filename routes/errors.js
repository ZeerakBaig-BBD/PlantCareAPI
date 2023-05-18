const express = require("express");
const router = express.Router();
const errorController = require("../controller/errorController");

router.get("*", errorController.errors);

module.exports = router;
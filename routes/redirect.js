const express = require("express");
const router = express.Router();
const RedirectController = require("../controller/redirectController");

router.all("*", RedirectController.redirect);

module.exports = router;
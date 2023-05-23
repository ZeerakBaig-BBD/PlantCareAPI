const express = require("express");
const router = express.Router();
const RedirectController = require("../controller/redirectController");

router.all("*", UserController.Login);

module.exports = router;
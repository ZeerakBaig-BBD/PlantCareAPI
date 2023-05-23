const express = require('express');
const router = express.Router();
const authController = require('../controller/authenticationController');

// GET new key
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API endpoints for creating keys
 * /v1/authentication/create:
 *   get:
 *     summary: Create API key.
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Successfully created API Key
 *         
 */
router.get('/create', authController.createKey);

module.exports = router;
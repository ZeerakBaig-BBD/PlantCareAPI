const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
const authController = require('../controller/authenticationController');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         userId:
 *           type: integer
 *           minimun: 1
 *           description: User ID
 *           required: true
 *         city:
 *           type: string
 *           description: User city
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API endpoints for managing users
 * /v1/users/'login':
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     parameters:
 *       - in: header
 *         name: api-key
 *         description: API Key
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 * 
 *     responses:
 *       200:
 *         description: User already exists
 *       201:
 *         description: User created
 *       400:
 *         description: Bad request
 */
router.post("/login", authController.validateKey, authController.validateUser, UserController.registerUser, UserController.Login);

module.exports = router;

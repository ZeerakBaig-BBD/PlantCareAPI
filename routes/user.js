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
 * components:
 *   schemas:
 *     UserRegister:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: User email
 *           format: email
 *         city:
 *           type: string
 *           description: User city
 *           required: false
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API endpoints for managing users login
 * /v1/users/login:
 *   post:
 *     summary: Login
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
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email
 *             required:
 *               - email
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found.
 */
router.post("/login", authController.validateKey, UserController.Login);

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API endpoints for managing users
 * /v1/users/register:
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
 *             $ref: '#/components/schemas/UserRegister'
 * 
 *     responses:
 *       200:
 *         description: User already exists
 *       201:
 *         description: User created
 *       400:
 *         description: Bad request
 */
router.post("/register", authController.validateKey, authController.validateUser, UserController.registerUser);

module.exports = router;

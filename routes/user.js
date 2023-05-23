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
 *         username:
 *           type: string
 *           description: User username
 *           required: true
 *         email:
 *           type: string
 *           description: User email
 *           format: email
 *         password:
 *           type: string
 *           description: User password
 *           required: true
 *           writeOnly: true
 *         city:
 *           type: string
 *           description: User city
 *           required: true
 *         province:
 *           type: string
 *           description: User province
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserAlt:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: User username
 *           required: true
 *         email:
 *           type: string
 *           description: User email
 *           format: email
 *         password:
 *           type: string
 *           description: User password
 *           required: true
 *           writeOnly: true
 *         city:
 *           type: string
 *           description: User city
 *           required: true
 *         province:
 *           type: string
 *           description: User province
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
 *               username:
 *                 type: string
 *                 description: User's username
 *               password:
 *                 type: string
 *                 description: User's password
 *             required:
 *               - username
 *               - password
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
 * /v1/users/update/{userId}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: header
 *         name: api-key
 *         description: API Key
 *         required: true
 *         schema:
 *           type: string
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserAlt'
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: User not found
 */

router.put("/update/:userId", authController.validateKey, UserController.updateUser);

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
 *             $ref: '#/components/schemas/UserAlt'
 *             exclude:
 *               - userId
 * 
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Bad request
 */
router.post("/register", authController.validateKey, UserController.postRegister);

module.exports = router;

const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API endpoints for managing users login
 * /users:
 *   post:
 *     summary: Login
 *     tags: [User]
 *     parameters:
 *       - username: username
 *       - password: passcode
 *         in: path
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/", UserController.Login);

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API endpoints for managing users
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [User]
 *     parameters:
 *       - name: id
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
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: User not found
 */

router.put("/", UserController.updateUser);

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API endpoints for managing users
 * /users/register:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Bad request
 */
router.post("/register", UserController.postRegister);

module.exports = router;

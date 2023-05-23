const express = require('express');
const router = express.Router();
const UserPlantController = require('../controller/userplantController');
const authController = require('../controller/authenticationController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Plant:
 *       type: object
 *       properties:
 *         plantId:
 *           type: integer
 *           minimun: 1
 *           description: Plant's ID
 *           required: true
 *         plantName:
 *           type: string
 *           description: Plant's common name
 *           required: true
 *         scientificName:
 *           type: string
 *           description: Plant's scientific name
 *           required: true
 *         otherName:
 *           type: string
 *           description: Plant's other name
 *         plantImage:
 *           type: string
 *           description: Plant's image
 *           required: true
 *           writeOnly: true
 *         plantType:
 *           type: string
 *           description: Plant's type
 *           required: true
 *         plantCare:
 *           type: object
 *           properties:
 *             sunlightRequirement:
 *               type: string
 *               description: Plant's sunlight requirement
 *               required: true
 *             waterRequirement:
 *               type: string
 *               description: Plant's water requirement
 *               required: true
 *             suitableRegion:
 *               type: string
 *               description: Plant's suitable region
 *               required: true
 *             suitableWeather:
 *               type: string
 *               description: Plant's suitable weather
 *               required: true
 *             plantEnvironment:
 *               type: bolean
 *               description: Plant's enivonment
 *               required: true
  *         plantNickname:
 *           type: string
 *           description: Plant's nickname
 *           required: true
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     UserPlant:
 *       type: object
 *       properties:
 *         plantNickName:
 *           type: string
 *           description: Plant's nickname
 *           required: true
 *         userId:
 *           type: integer
 *           minimun: 1
 *           description: User's ID
 *           required: true
 *         plantId:
 *           type: integer
 *           minimun: 1
 *           description: Plant's ID
 *           required: true
 */


// GET all User's Plants
/**
 * @swagger
 * tags:
 *   name: User Plants
 *   description: API endpoints for managing user's plants
 * /v1/user/plants/{userId}:
 *   get:
 *     summary: User's plants
 *     tags: [User Plants]
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
 *     responses:
 *       200:
 *         description: Successfully retrieved User's plants
 *         content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Plant'
 *       404:
 *         description: User's plants not found
 */
router.get('/:userId', authController.validateKey, UserPlantController.getUserPlants);

// POST new plant
/**
 * @swagger
 * tags:
 *   name: User Plants
 *   description: API endpoints for managing user's plants
 * /v1/user/plants/add:
 *   post:
 *     summary: Create a new plant care requirement
 *     tags: [User Plants]
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
 *             $ref: '#/components/schemas/UserPlant'
 *     responses:
 *       201:
 *         description: Successfully added user's plant
 *       400:
 *         description: Bad request
 */
router.post('/add', authController.validateKey, UserPlantController.postAddPlant);

// DELETE plant
/**
 * @swagger
 * tags:
 *   name: User Plants
 *   description: API endpoints for managing user's plants
 * /v1/user/plants/remove:
 *   post:
 *     summary: Delete a Plant care requirement by ID
 *     tags: [User Plants]
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
 *               userId:
 *                 type: integer
 *                 minimun: 1
 *                 description: User's ID
 *               plantNickName:
 *                 type: string
 *                 description: User's plant's nickname
 *             required:
 *               - userId
 *               - plantNickName
 *     responses:
 *       200:
 *         description: Successfully removed User's plant
 *       404:
 *         description: User's plant not found
 */
router.post('/remove', authController.validateKey, UserPlantController.deleteRemovePlant);

module.exports = router;

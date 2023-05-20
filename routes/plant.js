const express = require('express');
const router = express.Router();
const PlantController = require('../controller/plantController');
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
 */

// GET all plants
/**
 * @swagger
 * tags:
 *   name: Plant
 *   description: API endpoints for managing plants
 * /v1/plants/list:
 *   get:
 *     summary: Get all plants
 *     tags: [Plant]
 *     responses:
 *       200:
 *         description: Successfully obtained all plants
 *         content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Plant'
 *         
 */
router.get('/list', PlantController.getPlants);

// GET plant by Name
/**
 * @swagger
 * tags:
 *   name: Plant
 *   description: API endpoints for managing plants
 * /v1/plants/search/{name}:
 *   get:
 *     summary: Get a plant by Name
 *     tags: [Plant]
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         description: Name of the plant
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully obtained plant/s
 *         content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Plant'
 *       404:
 *         description: Plant/s not found
 */
router.get('/search/:name', PlantController.getByName);

module.exports = router;

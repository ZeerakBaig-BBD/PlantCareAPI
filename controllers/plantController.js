const express = require("express");
const db = require("../data-access/db");
const connection = require("../data-access/db").con;
const plantQueries = require("../data-access/queries/plantQueries");

const router = express.Router();

// GET all plants
/**
 * @swagger
 * tags:
 *   name: Plant
 *   description: API endpoints for managing plants
 * /plants:
 *   get:
 *     summary: Get all plants
 *     tags: [Plant]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", (req, res) => {
  connection.query(plantQueries.getPlants, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(result);
    }
  });
});

// GET plant by ID
/**
 * @swagger
 * tags:
 *   name: Plant
 *   description: API endpoints for managing plants
 * /plants/{id}:
 *   get:
 *     summary: Get a plant by ID
 *     tags: [Plant]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the plant
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Plant not found
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(plantQueries.getPlantById, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else if (result.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(result[0]);
    }
  });
});

// POST new plant
/**
 * @swagger
 * tags:
 *   name: Plant
 *   description: API endpoints for managing plants
 * /plants:
 *   post:
 *     summary: Create a new plant
 *     tags: [Plant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Plant'
 *     responses:
 *       201:
 *         description: Plant created
 *       400:
 *         description: Bad request
 */
router.post("/", (req, res) => {
  const {
    plantApiId,
    plantName,
    scientificName,
    otherName,
    plantImage,
    plantType,
    categoryId,
  } = req.body;

  if (
    !plantApiId ||
    !plantName ||
    !scientificName ||
    !otherName ||
    !plantImage ||
    !plantType ||
    !categoryId
  ) {
    res.status(400).json({ error: "Missing plant details" });
    return;
  }
  connection.query(
    plantQueries.registerPlant,
    [
      plantApiId,
      plantName,
      scientificName,
      otherName,
      plantImage,
      plantType,
      categoryId,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        const insertedPlant = {
          id: result.insertId,
          plantApiId,
          plantName,
          scientificName,
          otherName,
          plantImage,
          plantType,
          categoryId,
        };
        res.status(201).json(insertedPlant);
      }
    }
  );
});

// PUT update plant
/**
 * @swagger
 * tags:
 *   name: Plant
 *   description: API endpoints for managing plants
 * /plants/{id}:
 *   put:
 *     summary: Update a plant by ID
 *     tags: [Plant]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the plant
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Plant'
 *     responses:
 *       200:
 *         description: Plant updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Plant not found
 */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const {
    plantApiId,
    plantName,
    scientificName,
    otherName,
    plantImage,
    plantType,
    categoryId,
  } = req.body;

  if (
    !plantApiId ||
    !plantName ||
    !scientificName ||
    !otherName ||
    !plantImage ||
    !plantType ||
    !categoryId
  ) {
    res.status(400).json({ error: "Plant details are required" });
    return;
  }

  const values = [
    plantApiId,
    plantName,
    scientificName,
    otherName,
    plantImage,
    plantType,
    categoryId,
    id,
  ];

  connection.query(plantQueries.updatePlant, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: "Plant not found" });
    } else {
      res.sendStatus(200);
    }
  });
});

// DELETE plant
/**
 * @swagger
 * tags:
 *   name: Plant
 *   description: API endpoints for managing plants
 * /plants/{id}:
 *   delete:
 *     summary: Delete a Plant by ID
 *     tags: [Plant]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the plant
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Plant deleted
 *       404:
 *         description: Plant not found
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const values = [id];

  connection.query(plantQueries.deletePlant, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: "Plant not found" });
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;

const express = require("express");
const db = require("../data-access/db");
const connection = require("../data-access/db").con;
const userPlantQueries = require("../data-access/queries/userplantQueries");

const router = express.Router();

// GET all User Plants requirements
/**
 * @swagger
 * tags:
 *   name: UserPlantBridge
 *   description: API endpoints for managing UserPlant
 * /bridge:
 *   get:
 *     summary: Get all
 *     tags: [UserPlantBridge]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", (req, res) => {
  connection.query(userPlantQueries.getAllUserPlants, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(result);
    }
  });
});

// GET UserPlant by BridgeID
/**
 * @swagger
 * tags:
 *   name: UserPlantBridge
 *   description: API endpoints for managing briding table
 * /bridge/{id}:
 *   get:
 *     summary: Get UserPlant by ID
 *     tags: [UserPlantBridge]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the UserPlant
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: UserPlant not found
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(userPlantQueries.getUserPlantsById, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else if (result.length === 0) {
      res.status(404).json({ error: "UserPlant not found" });
    } else {
      res.json(result[0]);
    }
  });
});

// GET plant care by UserId
/**
 * @swagger
 * tags:
 *   name: UserPlantBridge
 *   description: API endpoints for managing briding table
 * /bridge/{id}:
 *   get:
 *     summary: Get bridge by ID
 *     tags: [UserPlantBridge]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the UserPlant
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: UserPlant not found
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(userPlantQueries.getUserPlants, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else if (result.length === 0) {
      res.status(404).json({ error: "UserPlant not found" });
    } else {
      res.json(result[0]);
    }
  });
});

// POST new plant
/**
 * @swagger
 * tags:
 *   name: PlantCare
 *   description: API endpoints for managing plant care requirements
 * /plantcare:
 *   post:
 *     summary: Create a new plant care requirement
 *     tags: [PlantCare]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PlantCare'
 *     responses:
 *       201:
 *         description: Plant care requirement created
 *       400:
 *         description: Bad request
 */
router.post("/", (req, res) => {
  const {
    sunlightRequirement,
    waterRequirement,
    suitableRegion,
    suitableWeather,
    plantId,
  } = req.body;

  if (
    !sunlightRequirement ||
    !waterRequirement ||
    !suitableRegion ||
    !suitableWeather ||
    !plantId
  ) {
    res.status(400).json({ error: "Missing plant requirement details" });
    return;
  }
  connection.query(
    plantCareQueries.registerPlantCare,
    [
      sunlightRequirement,
      waterRequirement,
      suitableRegion,
      suitableWeather,
      plantId,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        const insertedPlantCare = {
          id: result.insertId,
          sunlightRequirement,
          waterRequirement,
          suitableRegion,
          suitableWeather,
          plantId,
        };
        res.status(201).json(insertedPlantCare);
      }
    }
  );
});

// PUT update plant
/**
 * @swagger
 * tags:
 *   name: UserPlantBridge
 *   description: API endpoints for managing plants
 * /bridge/{id}:
 *   put:
 *     summary: Update a plant by ID
 *     tags: [UserPlantBridge]
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
 *             $ref: '#/components/schemas/UserPlantBridge'
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
  const { plantNickName, plantId, userId } = req.body;

  if (!plantNickName || !plantId || !userId) {
    res.status(400).json({ error: "Plant details are required" });
    return;
  }

  const values = [plantNickName, plantId, userId];

  connection.query(
    userPlantQueries.updateUserPlantBridge,
    values,
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: "Plant not found" });
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// DELETE plant
/**
 * @swagger
 * tags:
 *   name: PlantCare
 *   description: API endpoints for managing plant care requirements
 * /plantcare/{id}:
 *   delete:
 *     summary: Delete a Plant care requirement by ID
 *     tags: [PlantCare]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the plant care requirement
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Plant care requirement deleted
 *       404:
 *         description: Plant care requirement not found
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const values = [id];

  connection.query(plantCareQueries.deletePlantCare, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: "Plant care requirement not found" });
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;

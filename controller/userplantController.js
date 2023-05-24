const Plant = require('../models/plant');
const UserPlant = require('../models/userplant');


exports.getUserPlants = (req, res) => {
  const errorMessage = "User's plants not found."
  const {userId} = req.params;
  
  UserPlant.getUserPlants(userId)
  .then(responseData => {
      if (responseData.length > 0) {
        let userplants = [];
        responseData.map((item, index) =>{
          const getPlant = new Plant(item);
          getPlant.getPlantById(getPlant)
          .then(plantData =>{
              plantData.plantNickName = item.plantNickName;
              userplants.push(plantData);
              if (index === responseData.length - 1) {
                  res.status(200).send(userplants);
              }
          } )
        });
      } else {
        res.status(404).send(errorMessage);
      }
      
  })
  .catch(error => {
      console.error('Error retrieving plants:', error);
      
      res.status(500).json(error);
    });
}


exports.postAddPlant = (req, res) => {
  const responseMessage = 'Successfully added!';
  const errorMessage = 'Unferntunately failed adding plant!';

  const {plantNickName, userId, plantId} = req.body;

  UserPlant.insertUserPlant(plantNickName, userId, plantId)
  .then(responseData => {
      if (responseData === true){
        res.status(200).send(responseData);
      } else {
        res.status(400).json(responseData);
      }
      
    })
  .catch(error => {
      console.error('Error adding user plant:', error);
      res.status(500).json(error);
    });
}

// PUT update plant
/**
 * @swagger
 * tags:
 *   name: UserPlantBridge
 *   description: API endpoints for managing plants
 * /userplant/{id}:
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
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { plantNickName, plantId, userId } = req.body;

//   if (!plantNickName || !plantId || !userId) {
//     res.status(400).json({ error: "Plant details are required" });
//     return;
//   }

//   const values = [plantNickName, plantId, userId];

//   connection.query(
//     userPlantQueries.updateUserPlantBridge,
//     values,
//     (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: "Internal Server Error" });
//       } else if (result.affectedRows === 0) {
//         res.status(404).json({ error: "Plant not found" });
//       } else {
//         res.sendStatus(200);
//       }
//     }
//   );
// });



exports.deleteRemovePlant = (req, res) => {
  const responseMessage = 'Successfully removed!';
  const errorMessage = 'Unferntunately failed removing plant!';
  const { userId, plantNickName } = req.body;

  UserPlant.removeUserPlant(userId, plantNickName)
  .then(responseData => {
      if (responseData === true){
          res.status(200).send(responseMessage);
      } else{
          res.status(404).send(errorMessage);
      }
      
    })
  .catch(error => {
      console.error('Error removing user plant:', error);
      res.status(500).json(error);
    });
}

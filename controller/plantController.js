const Plant = require("../models/plant");

exports.getPlants = (req, res) => {
  plant = new Plant({});
  plant.getPlantList()
  .then(responseData => {
    if (responseData) {
      res.status(200).json(responseData)
    }
    else {
      res.status(400).send(false);
    }
  })
  .catch(error => {
    console.error('Error retrieving species list:', error);
    res.status(500).send('An error occurred while retrieving the species list');
  });
}

exports.getByName = (req, res) => {
  const errorMessage = "Plant not found."

  plant = new Plant({});
  plant.getPlantByName(req.params.name)
  .then(responseData => {
    if (responseData) {
      res.status(200).json(responseData)
    }
    else {
      res.status(404).send(errorMessage);
    }
  })
  .catch(error => {
    console.error('Error retrieving species by name:', error);
    res.status(500).send('An error occurred while retrieving the species by name');
  });
}





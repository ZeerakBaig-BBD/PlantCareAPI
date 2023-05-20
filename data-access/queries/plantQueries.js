exports.getPlants  = `SELECT plantId, plantName, scientificName, otherName, plantImage, plantType FROM plant`;

exports.getPlantByName  = `SELECT plantId, plantName, scientificName, otherName, plantImage, plantType FROM plant WHERE plantName LIKE ? OR scientificName LIKE ? OR otherName LIKE ?`;

exports.getPlantById  = `SELECT plantId, plantName, scientificName, otherName, plantImage, plantType FROM plant WHERE plantId = ?`;

exports.insertPlant = `INSERT INTO plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) VALUES (?, ?, ?, ?, ?, ?, 1)` ;







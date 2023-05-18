exports.getPlants = `SELECT * FROM plant`;
exports.getPlantById = `SELECT * FROM plant WHERE plantId = ?`;
exports.registerPlant = `INSERT INTO plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) VALUES (?, ?, ?, ?, ?,?,?)`;
exports.updatePlant = `UPDATE plant SET plantApiId = ?, plantName = ?, scientificName = ?, otherName = ?, plantImage = ?, plantType=?, categoryId=? WHERE plantId = ?`;
exports.deletePlant = `DELETE FROM plant WHERE plantId = ?`;
exports.getPlantByName = `SELECT * FROM plant WHERE plantName like %?% OR scientificName like %?% OR otherName like %?%`;
exports.getPlantCare = `SELECT * FROM plantcarerequirement WHERE plantId = ?`;

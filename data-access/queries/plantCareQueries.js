exports.getPlantRequirements = `SELECT * FROM plantcarerequirement`;
exports.getPlantCareById = `SELECT * FROM plantcarerequirement WHERE plantCareId = ?`;
exports.registerPlantCare = `INSERT INTO plantcarerequirement (sunlightRequirement,waterRequirement, suitableRegion, suitableWeather, plantId) VALUES (?, ?, ?, ?, ?)`;
exports.updatePlantCare = `UPDATE plantcarerequirement SET sunlightRequirement = ?, waterRequirement = ?, suitableRegion = ?, suitableWeather = ?, plantId = ? WHERE plantCareId = ?`;
exports.deletePlantCare = `DELETE FROM plantcarerequirement WHERE plantCareId = ?`;

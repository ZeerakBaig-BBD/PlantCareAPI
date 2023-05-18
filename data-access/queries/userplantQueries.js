exports.getAllUserPlants = `SELECT * FROM userplantbridge`;
exports.getUserPlantsById = `SELECT * FROM userplantbridge WHERE bridgeId = ?`;
exports.getUserPlants = `SELECT * FROM userplantbridge WHERE userId = ?`;
exports.updateUserPlantBridge = `UPDATE appuser SET plantNickName = ?, plantId = ?, userId = ?  WHERE bridgeId = ?`;

exports.getUserPlantByName = `SELECT * FROM userplantbridge WHERE userId = ? AND plantNickName = ?`;

exports.insertUserPlant = `INSERT INTO userplantbridge (plantNickName, plantId, userId) VALUES (?, ?, ?)`;

exports.removeUserPlant = `DELETE FROM userplantbridge WHERE userId = ? OR plantNickName = ?`;

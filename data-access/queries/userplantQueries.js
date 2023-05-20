exports.getUserPlants = `SELECT plantNickName, plantId, userId FROM plantdb.userplantbridge WHERE userId = ?`;

exports.getUserPlantByName = `SELECT plantNickName, plantId, userId FROM plantdb.userplantbridge WHERE userId = ? AND plantNickName = ?`;

exports.insertUserPlant = `INSERT INTO plantdb.userplantbridge (plantNickName, plantId, userId) VALUES (?, ?, ?)`;

exports.removeUserPlant = `DELETE FROM plantdb.userplantbridge WHERE userId = ? AND plantNickName = ?`;








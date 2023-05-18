exports.getAllUsers = `SELECT * FROM appuser`;
exports.getUser = `SELECT * FROM appuser WHERE userId = ?`;
exports.registerUser = `INSERT INTO appuser (username, email, passcode, city, province) VALUES (?, ?, ?, ?, ?)`;
exports.updateUser = `UPDATE appuser SET username = ?, email = ?, passcode = ?, city = ?, province = ? WHERE userId = ?`;
exports.deleteUser = `DELETE FROM appuser WHERE userId = ?`;

exports.validateUser = `SELECT username, email, passcode, city, province FROM appuser WHERE username = ? AND passcode = ?`;

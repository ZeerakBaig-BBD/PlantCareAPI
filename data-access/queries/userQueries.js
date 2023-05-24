exports.registerUser = `INSERT INTO appuser (email, city) VALUES (?, ?)`;

exports.validateUser = `SELECT userId, city FROM appuser WHERE email = ?`;

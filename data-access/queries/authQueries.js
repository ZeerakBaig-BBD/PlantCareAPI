exports.insertKey = `INSERT INTO plantdb.APIKeys (APIKey) VALUES (?)`;

exports.validateKey = `SELECT APIKey FROM plantdb.APIKeys WHERE APIKey = ?`;
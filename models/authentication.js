const authQueries = require('../data-access/queries/authQueries');
const connection = require('../data-access/db').con;

function generateUUID() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return r.toString(16);
    });
    return uuid;
}

exports.createKey = () =>{
    const uuid = generateUUID();
    return new Promise((resolve, reject) => {
        connection.query(authQueries.insertKey, [uuid], (err, result) => {
          if (err) {
            reject(err);
          } else {
            if (result.affectedRows > 0) {
                resolve(uuid)
            } else {
                resolve(result);
            }
          }
        });
    });
}

exports.validateKey = (key) =>{
    return new Promise((resolve, reject) => {
        connection.query(authQueries.validateKey, [key], (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve((result.length > 0)?true:false);
          }
        });
    });
}
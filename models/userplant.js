const userplantQueries = require('../data-access/queries/userplantQueries');
const connection = require('../data-access/db').con;

exports.getUserPlants = ({userId}) => {
  return new Promise((resolve, reject) => {
    connection.query(userplantQueries.getUserPlants, [userId], (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

exports.getUserPlantByName = (userId, plantName)  =>  {
  return new Promise((resolve, reject) => {
    connection.query(userplantQueries.getUserPlants, [userId, plantName], (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve((result.affectedRows > 0)?true:false);
      }
    });
  });
}

exports.insertUserPlant = (NickName, {userId}, plantId) =>  {
  return new Promise((resolve, reject) => {
    connection.query(userplantQueries.insertUserPlant, [NickName, userId, plantId], (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve((result.affectedRows > 0)?true:false);
      }
    });
  });
}

exports.removeUserPlant = (userId, plantNickName) =>  {
    return new Promise((resolve, reject) => {
        connection.query(userplantQueries.removeUserPlant, [userId, plantNickName], (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve((result.affectedRows > 0)?true:false);
          }
        });
    });
}

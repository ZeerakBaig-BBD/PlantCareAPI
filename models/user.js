const userQueries = require("../data-access/queries/userQueries");
const connection = require("../data-access/db").con;

class User {
  constructor({ userId, email, city}) {
    this.userId = userId;
    this.email = email;
    this.city = city;
  }

  registerUser(email) {
    return new Promise((resolve, reject) => {
      this.validateUser(email)
      .then(user => {
        if (user.succeeded === true) {
          resolve(user.succeeded);
        } else {
          connection.query(
            userQueries.registerUser,
            [email, 'Johannesburg'],
            (err, result) => {
              if (err) {
                reject(err);
              } else {
                resolve(result.affectedRows > 0 ? true : false);
              }
            }
          );
        }
      })
      .catch(err => {
        reject(err);
      })
      
    });
  }

  validateUser({email}) {
    return new Promise((resolve, reject) => {
      connection.query(
        userQueries.validateUser,
        [email],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            let user;
            if (result.length != 0) {
              user = new User(result[0]);
              user.succeeded = true;
            } else {
              user.succeeded = false;
            }
            resolve(user);
          }
        }
      );
    });
  }
}

module.exports = User;

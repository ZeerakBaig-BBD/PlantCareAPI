const userQueries = require("../data-access/queries/userQueries");
const connection = require("../data-access/db").con;

class User {
  constructor({ userId, email, city, succeeded}) {
    this.userId = userId;
    this.email = email;
    this.city = city;
    this.succeeded = succeeded;
  }

  registerUser({email}) {
    console.log(email);
    return new Promise((resolve, reject) => {
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
            let user = {};
            if (result.length > 0) {
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

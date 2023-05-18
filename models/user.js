const userQueries = require("../data-access/queries/userQueries");
const connection = require("../data-access/db").con;

class User {
  constructor({ userId, username, email, password, city, province }) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.passcode = password;
    this.city = city;
    this.province = province;
  }

  registerUser({ username, email, passcode, city, province }) {
    return new Promise((resolve, reject) => {
      connection.query(
        userQueries.registerUser,
        [username, email, passcode, city, province],
        (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.affectedRows > 0 ? true : false);
          }
        }
      );
    });
  }

  async validateUser(user) {
    return new Promise((resolve, reject) => {
      connection.query(
        userQueries.validateUser,
        [user.username, user.passcode],
        (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
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

  async updateUser(userId, { username, email, passcode, city, province }) {
    return new Promise((resolve, reject) => {
      connection.query(
        userQueries.updateUser,
        [username, email, passcode, city, province, userId],
        (err, result, fields) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.affectedRows > 0 ? true : false);
          }
        }
      );
    });
  }
}

module.exports = User;

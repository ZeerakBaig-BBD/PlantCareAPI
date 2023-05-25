const User = require("../models/user");

// Login
exports.Login = (req, res) => {
  const user = new User(req.body);
  user
    .validateUser(user)
    .then((responseData) => {

      if (responseData.succeeded === true) {
        res.status(200).json(responseData);
      } else {
        res.status(404).json(responseData.succeeded );
      }
    })
    .catch((error) => {
      console.error("Error signing in user:", error);
      res.status(500).json(error);
    });
};

// POST new user
exports.registerUser = (req, res, next) => {
  const user = new User(req.body);
  user
    .registerUser(user)
    .then((responseData) => {
      if (responseData === true) {
        next();
      } else {
        res.status(400).json(responseData);
      }
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      res.status(500).json(error);
    });
};
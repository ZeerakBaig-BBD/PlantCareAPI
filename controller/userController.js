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
        res.status(404).json(responseData);
      }
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      res.status(500).json(error);
    });
};

// POST new user
exports.postRegister = (req, res) => {
  const user = new User(req.body);
  user
    .registerUser(user)
    .then((responseData) => {
      if (responseData === true) {
        res.status(201).json(responseData);
      } else {
        res.status(400).json(responseData);
      }
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      if (error.sqlMessage.includes('Duplicate')) {
        res.status(500).send('Username already exists');
      }else {
        res.status(500).json(error);
      }
    });
};

// PUT update user
exports.updateUser = (req, res) => {
  const user = new User(req.body);
  const {userId} = req.params;
  
  user
    .updateUser(userId, user)
    .then((responseData) => {
      if (responseData === true) {
        res.status(200).json(responseData);
      } else {
        res.status(400).json(responseData);
      }
    })
    .catch((error) => {
      console.error("Error updating user details:", error);
      if (error.sqlMessage.includes('Duplicate')) {
        res.status(500).send('Username already exists');
      }else {
        res.status(500).json(error);
      }
    });
};

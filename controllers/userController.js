const express = require("express");
const db = require("../data-access/db");
const connection = require("../data-access/db").con;
const userQueries = require("../data-access/queries/userQueries");
const User = require("../models/user");

const router = express.Router();

// Login
exports.Login = (req, res) => {
  const user = new User(req.body);
  user
    .validateUser(user)
    .then((responseData) => {
      if (responseData.succeeded === true) {
        res.status(200).json(responseData);
      } else {
        res.status(400).json(responseData);
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
        res.status(200).json(responseData);
      } else {
        res.status(400).json(responseData);
      }
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      res.status(500).json(error);
    });
};

// PUT update user

exports.updateUser = (req, res) => {
  const user = new User(req.body);
  const { id } = req.params;
  user
    .updateUser(id, user)
    .then((responseData) => {
      if (responseData === true) {
        res.status(200).json(responseData);
      } else {
        res.status(400).json(responseData);
      }
    })
    .catch((error) => {
      console.error("Error updating user details:", error);
      res.status(500).json(error);
    });
};

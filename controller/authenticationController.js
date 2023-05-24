const auth = require('../models/authentication');
const User = require("../models/user");

exports.createKey = (req, res) => {

    auth.createKey()
    .then(responseData => {
        if (responseData.length > 0) {
            res.status(200).json(responseData);
        } else {
            res.status(400).json(responseData);
        }
    })
    .catch(error => {
        console.error('Error creating key :', error);
        res.status(500).send('An error occurred while creating the API key');
      });
};

exports.validateKey = (req, res, next) => {
    const errorMessage = 'Seeds of error! Valid API key required to proceed. We\'re rooting for you!'
    const key = req.headers['api-key'];
    if (key && typeof key != 'undefined') {
        auth.validateKey(key)
        .then(responseData => {
            if (responseData === true) {
                next();
            } else {
                res.status(403).send(errorMessage);
            }
        })
    } else {
        res.status(403).send(errorMessage);
    }
};

exports.validateUser = (req, res, next) => {
    const user = new User(req.body);
    user
      .validateUser(user)
      .then((responseData) => {
        if (responseData.succeeded === true) {
            res.status(200).send(responseData.succeeded)
        } else {
            next();
        }
      })
      .catch(error => {
        console.error('Error creating key :', error);
        res.status(500).send('An error occurred while creating the API key');
      });
};
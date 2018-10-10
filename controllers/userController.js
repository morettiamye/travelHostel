var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/user");

var userController = {};
// Post registration

userController.signup = function(req, res) {
  User.register(new User({ username : req.body.username}), req.body.password, function(err, user) {
    if (err) {
      return res.status(400).json({error: "Failed to sign up"});
    }

    passport.authenticate('local')(req, res, function () {
      res.json({userID: req.user.id, username:req.user.username})
    });
  });
};
// // Post login
userController.login = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.json({userID: req.user.id, username:req.user.username})
  });
};

// // logout
userController.logout = function(req, res) {
  req.logout();
  res.json({loggedout: true});
};

module.exports = userController;
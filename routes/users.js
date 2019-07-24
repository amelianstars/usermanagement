const express = require("express");
const router = express.Router();
// Load User model
const User = require("../models/User");



// @route GET api/users/
// @desc View all Users
// @access Public
router.get("/", (req, res) => {
  User.find()
  .then(user => res.json(user))
  .catch(err => console.log(err));
});


// @route GET api/users/:id
// @desc View all Users
// @access Public
router.get("/find/:id", (req, res) => {
  User.findOne({ '_id': req.params.id })
  .then(user => res.json(user))
  .catch(err => console.log(err));
});


// @route POST api/users/new
// @desc Create new user
// @access Public
router.post("/new", (req, res) => {
        let user = new User(req.body);
        user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
            
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
  });


// @route POST api/users/edit
// @desc Edit user
// @access Public\
router.post("/edit/:id", (req, res) => {
  User.findOneAndUpdate({ '_id': req.params.id }, {$set: {
    name: req.body.name,
    username: req.body.username
  }}, {w:1}, function(err, result){
    res.json(result);
    console.log(err);
  })
});


// @route POST api/users/delete
// @desc Delete user
// @access Public
router.post("/delete/:id", (req, res) => {
  User.deleteOne({ '_id': req.params.id }, function(err, result){
    console.log(err);
  })
  return res.redirect('/');
});

module.exports = router;
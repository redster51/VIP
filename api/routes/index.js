let express = require("express");

let router = express.Router();
let jwt = require('express-jwt');
let auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

let ctrlProfile = require('../controllers/profile');
let ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

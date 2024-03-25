const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// These are "prefixed" with /api/users
router.post('/', usersController.create);
router.post('/login', usersController.login);


// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersController.checkToken);

module.exports = router;


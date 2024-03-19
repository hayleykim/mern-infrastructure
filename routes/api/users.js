const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersController.checkToken);

router.post('/', usersController.create);
router.post('/login', usersController.login);

module.exports = router;


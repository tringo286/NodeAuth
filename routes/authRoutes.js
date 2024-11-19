const express = require('express');
const router = express.Router();
const { signup_post } = require('../controllers/authControllers');

router.post('/signup', signup_post);

module.exports = router;
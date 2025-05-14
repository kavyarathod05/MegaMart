const express = require('express');
const { createUser, loginUser, forgotPassword } = require('../controller/Auth');

const router = express.Router();
//  /auth is already added in base path
router.post('/signup', createUser).post('/login', loginUser);
router.post('/forgot-password', forgotPassword);

exports.router = router;

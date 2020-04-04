const express = require('express');
const router = express.Router();

// @router    POST /api/auth
// @desc      Login and get token
// @access    Public
router.post('/', (req, res) => {
  res.send('Login and get token');
});

// @router    GET /api/auth
// @desc      Get Logged in user
// @access    Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

module.exports = router;

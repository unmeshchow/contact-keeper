const express = require('express');
const router = express.Router();

// @router    POST /api/contacts
// @desc      Add new contact
// @access    Privatge
router.post('/', (req, res) => {
  res.send('Add new contact');
});

// @router    GET /api/contacts
// @desc      Get all user's contacts
// @access    Private
router.get('/', (req, res) => {
  res.send("Get all user's contacts");
});

// @router    GET /api/contacts/:id
// @desc      Get single user's contacts
// @access    Private
router.get('/:id', (req, res) => {
  res.send("Get single user's contacts");
});

// @router    PUT /api/contacts/:id
// @desc      Update single user's contacts
// @access    Private
router.put('/:id', (req, res) => {
  res.send("Update single user's contacts");
});

// @router    DELETE /api/contacts/:id
// @desc      Delete single user's contacts
// @access    Private
router.delete('/:id', (req, res) => {
  res.send("Delete single user's contacts");
});

module.exports = router;

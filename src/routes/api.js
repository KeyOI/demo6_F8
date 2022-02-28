const express = require('express');
const router = express.Router();

const apiController = require('../app/controllers/APIController');

router.get('/courses', apiController.courses); 

module.exports = router;

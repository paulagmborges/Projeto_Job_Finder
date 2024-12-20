const express = require('express');
const router = express.Router();
const jobController = require('../controller/jobCreateController');  

router.post('/add', jobController.addJob);

module.exports = router;


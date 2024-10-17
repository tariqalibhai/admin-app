const express = require('express');
const router = express.Router();
const Services = require('../controllers/services-controller'); // Adjust the path if necessary

router.route('/services').get(Services);

module.exports = router;

const express = require('express');
const router = express.Router();
const contactForm = require('../controllers/contact-form-controller'); // Adjust the path if necessary

router.route('/contact').post(contactForm);

module.exports = router;

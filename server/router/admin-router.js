const express = require('express');
const router = express.Router();
// Adjust the path if necessary
const adminController = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/authMiddlewares');
const adminMiddleware = require('../middlewares/admin-middleware');


router.route('/users').get(authMiddleware,adminMiddleware,adminController.getAllUSers);
router.route('/contacts').get(adminController.getAllContacts);
// DELETE user by ID
router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteUser);

module.exports = router;

const express = require('express');
const router = express.Router();
// Adjust the path if necessary
const adminController = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/authMiddlewares');
const adminMiddleware = require('../middlewares/admin-middleware');


router.route('/users').get(authMiddleware,adminMiddleware,adminController.getAllUSers);
router.route('/contacts').get(authMiddleware,adminMiddleware,adminController.getAllContacts);
// DELETE user by ID
router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteUser);
// Edit user by ID
router.route('/users/:id').get(authMiddleware,adminMiddleware,adminController.GetUser);
router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,adminController.updateUser)
// Delete the Contact Message 
// Inside adminrouter.js

// Add this line under your other routes
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteContact);


module.exports = router;

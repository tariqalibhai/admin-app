const express = require("express");
const router = express.Router();
const authMiddlewares = require("../middlewares/authMiddlewares")
const authControllers = require('../controllers/controller-auth')



router.route('/').get(authControllers.home);
router.route('/register').post(authControllers.register)
router.route('/login').post(authControllers.login)
router.route('/user').get(authMiddlewares,authControllers.user)



module.exports = router;















// router.get('/',(req, resp)=>{
//     resp.send("Hello boys this is using Router")
// })
// router.route('/register').get((req, resp)=>{
//     resp.send("Hello boys Register this is using Router")
// })
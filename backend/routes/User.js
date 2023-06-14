const express = require('express');
const router = express.Router();

const userController = require('../Controllers/User_controller');


router.post('/create',userController.createUser);
router.post('/session',userController.session);


module.exports = router;
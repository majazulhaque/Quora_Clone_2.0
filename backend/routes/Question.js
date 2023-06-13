const express = require('express');
const router = express.Router();

const questionController = require('../Controllers/Question_controller');



router.post('/create', questionController.create);
router.get('/get',questionController.getQuestion);

module.exports = router;
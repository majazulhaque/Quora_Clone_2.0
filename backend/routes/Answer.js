const express = require('express');
const router = express.Router();

const answerController = require('../Controllers/Answer_controller');

router.post('/create',answerController.createAnswer);

module.exports = router;
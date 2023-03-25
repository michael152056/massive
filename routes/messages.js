const express = require('express');
const router = express.Router();
const msgController = require('../controllers/msgController')

router.post('/',msgController.startSession);

module.exports = router;

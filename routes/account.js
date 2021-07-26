var express = require('express');
var router = express.Router();

const accountApi= require('../controllers/accountController');
router.post('/login', accountApi.Login);

module.exports = router;
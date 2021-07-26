var express = require('express');
var router = express.Router();

// var auth = require('../Filter/auth/auth');
/* GET home page. */
const homeApi= require('../controllers/homeApiController');
router.get('/getcabs',homeApi.getNearByCabs);

module.exports = router;

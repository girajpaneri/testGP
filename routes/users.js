var express = require('express');
var router = express.Router();

/* GET users . */
const userApi= require('../controllers/userApiController');
router.post('/book',userApi.bookCab);
router.get('/rides/:id',userApi.getYourRides);

module.exports = router;

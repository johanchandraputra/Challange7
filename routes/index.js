var express = require('express');

const router = express.Router();

const registrationRoute = require("./registration.route");

router.use("/register", registrationRoute);


// * GET home page. */
//  router.get('/', function(req, res, next) {
//    res.render('index', { title: 'Express' });
// });

module.exports = router;

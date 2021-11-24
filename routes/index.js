var express = require('express');

const router = express.Router();

const registrationRoute = require("./registration.route");
const loginRoute = require("./login.route");

router.use("/register", registrationRoute);
router.use("/login", loginRoute);


module.exports = router;

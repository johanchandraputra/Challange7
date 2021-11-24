var express = require('express');

const router = express.Router();

const registrationRoute = require("./registration.route");
const loginRoute = require("./login.route");
const roomRoute = require("./room.route");

router.use("/register", registrationRoute);
router.use("/login", loginRoute);
router.use("/rooms", roomRoute);


module.exports = router;

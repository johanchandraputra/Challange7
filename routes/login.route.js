const express = require("express");

const router = express.Router();

const loginController = require("../controllers/login.controller");
const authMiddleware = require("../middlewares/auth");

router.post("/token", loginController.validate);
router.get("/user-info", authMiddleware.passportAuthenticate, loginController.userInfo);

module.exports = router;

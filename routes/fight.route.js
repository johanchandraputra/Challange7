const express = require("express");
const fightController = require("../controllers/fight.controller");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/:id", authMiddleware.passportAuthenticate, fightController);

module.exports = router;
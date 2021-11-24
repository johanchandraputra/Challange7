const express = require("express");
const roomController = require("../controllers/room.controller");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/create-room", authMiddleware.passportAuthenticate, roomController.create);
router.delete("/delete/:id", authMiddleware.passportAuthenticate, roomController.remove);

module.exports = router;

const { users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config();

class BadCredentialsError extends Error {
    constructor(message) {
        super(message);
        this.name = "BadCredentialsError";
    }
}

async function userValidation(username, password) {
    const user = await users.findOne({ where: { username: username } });
    if (!user) {
        throw new BadCredentialsError("invalid username or password");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new BadCredentialsError("invalid username or password");
    }

    return user;
}

function createToken(user) {
    const payload = {
        userId: user.id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
        subject: user.username,
    });

    return token;
}

module.exports = {
    userValidation,
    createToken,
};
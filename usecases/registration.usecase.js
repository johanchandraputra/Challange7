const { users } = require("../models");
const bcrypt = require("bcrypt");
const { userInfo } = require("../mapper/userMap");

class RequiredFieldsMissingError extends Error {
  constructor(message) {
    super(message);
    this.name = "RequiredFieldsMissingError";
  }
}

class UserAlreadyExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = "UserAlreadyExistsError";
  }
}

async function userRegistration(data) {
  try {
    const {username, password } = data;
    if (!username || !password) {
      throw new RequiredFieldsMissingError(
        "Username and password are required"
      );
    }

    const user = await users.findOne({ where: { username: username } });
    if (user) {
      throw new UserAlreadyExistsError("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return userInfo(
      await users.create({
        username: data.username,
        password: hashedPassword,
      })
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
    userRegistration,
};

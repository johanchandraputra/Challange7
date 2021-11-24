const { users } = require("../models");
const userMap = require("../mapper/userMap");

async function findUserById(id) {
  const user = await users.findByPk(id);
  return userMap.userInfo(user);
}

module.exports = {
  findUserById,
};

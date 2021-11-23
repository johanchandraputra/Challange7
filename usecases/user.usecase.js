const { User } = require("../models");
const userMap = require("../mapper/userMap");

async function findUserById(id) {
  const user = await User.findByPk(id);
  return userMap.mapPublicInfoOfUser(user);
}

module.exports = {
  findUserById,
};

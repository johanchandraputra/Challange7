function userInfo(user) {
    return {
      id: user.id,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
  
  module.exports = {
    userInfo,
  };
  
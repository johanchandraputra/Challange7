'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  game_history.init({
    room_id: DataTypes.INTEGER,
    winner_user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game_history',
  });
  return game_history;
};
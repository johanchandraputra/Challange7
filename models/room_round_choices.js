'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room_round_choices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  room_round_choices.init({
    room_round_id: DataTypes.INTEGER,
    room_participant_id: DataTypes.INTEGER,
    choice: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'room_round_choices',
  });
  return room_round_choices;
};
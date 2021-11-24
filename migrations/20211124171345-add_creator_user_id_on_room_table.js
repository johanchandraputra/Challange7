'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'rooms',
      'creator_user_id',
      Sequelize.INTEGER
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('rooms', 'creator_user_id');
  }
};

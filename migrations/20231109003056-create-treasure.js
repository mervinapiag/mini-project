'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Treasures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: true
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Treasures');
  }
};
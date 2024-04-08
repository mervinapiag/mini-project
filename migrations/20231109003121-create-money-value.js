'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MoneyValues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      treasure_id: {
        type: Sequelize.INTEGER,
      },
      amt: {
        type: Sequelize.INTEGER
      }
    }, {
      timestamps: true
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MoneyValues');
  }
};
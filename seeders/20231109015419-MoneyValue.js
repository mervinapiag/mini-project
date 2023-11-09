'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MoneyValues', [
      { treasure_id: 1, amt: 15 },
      { treasure_id: 2, amt: 10 },
      { treasure_id: 3, amt: 15 },
      { treasure_id: 4, amt: 15 },
      { treasure_id: 5, amt: 10 },
      { treasure_id: 6, amt: 15 },
      { treasure_id: 7, amt: 15 },
      { treasure_id: 8, amt: 10 },
      { treasure_id: 9, amt: 15 },
      { treasure_id: 10, amt: 15 },
      { treasure_id: 11, amt: 10 },
      { treasure_id: 12, amt: 15 },
      { treasure_id: 13, amt: 15 },
      { treasure_id: 14, amt: 10 },
      { treasure_id: 15, amt: 15 },
      { treasure_id: 16, amt: 15 },
      { treasure_id: 17, amt: 10 },
      { treasure_id: 18, amt: 15 },
      { treasure_id: 1, amt: 20 },
      { treasure_id: 2, amt: 25 },
      { treasure_id: 3, amt: 20 },
      { treasure_id: 4, amt: 25 },
      { treasure_id: 8, amt: 30 },
      { treasure_id: 9, amt: 30 },
      { treasure_id: 10, amt: 30 },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Remove all rows from the 'MoneyValues' table
    await queryInterface.bulkDelete('MoneyValues', null, {});
  }
};

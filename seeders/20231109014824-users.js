'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { name: 'U1', age: 21, password: '123123', email: 'u1@kitra.abc' },
      { name: 'U2', age: 51, password: '234234', email: 'u2@kitra.abc' },
      { name: 'U3', age: 31, password: '345345', email: 'u3@kitra.abc' },
      { name: 'U4', age: 18, password: '456456', email: 'u4@kitra.abc' },
      { name: 'U5', age: 21, password: '567567', email: 'u5@kitra.abc' },
      { name: 'U6', age: 35, password: '678678', email: 'u6@kitra.abc' },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Remove all rows from the 'Users' table
    await queryInterface.bulkDelete('Users', null, {});
  }
};

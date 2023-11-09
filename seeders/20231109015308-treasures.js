'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Treasures', [
      { latitude: 14.54376481, longitude: 121.0199117, Name: 'T1' },
      { latitude: 14.55320766, longitude: 121.0557745, Name: 'T2' },
      { latitude: 14.54464357, longitude: 121.0203656, Name: 'T3' },
      { latitude: 14.58726159, longitude: 120.9795048, Name: 'T4' },
      { latitude: 14.57320327, longitude: 121.0230904, Name: 'T5' },
      { latitude: 14.52311313, longitude: 121.0194573, Name: 'T6' },
      { latitude: 14.60242292, longitude: 121.0115134, Name: 'T7' },
      { latitude: 14.60857463, longitude: 121.0185514, Name: 'T8' },
      { latitude: 14.49111434, longitude: 121.0437482, Name: 'T9' },
      { latitude: 14.54455953, longitude: 121.1060883, Name: 'T10' },
      { latitude: 14.58798141, longitude: 121.058208, Name: 'T11' },
      { latitude: 14.54886493, longitude: 121.0336393, Name: 'T12' },
      { latitude: 14.53715059, longitude: 120.9904302, Name: 'T13' },
      { latitude: 14.52579666, longitude: 121.0208688, Name: 'T14' },
      { latitude: 14.51709988, longitude: 120.9810021, Name: 'T15' },
      { latitude: 14.50200687, longitude: 120.9916181, Name: 'T16' },
      { latitude: 14.52112441, longitude: 121.0427714, Name: 'T17' },
      { latitude: 14.47720766, longitude: 120.9867927, Name: 'T18' },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Remove all rows from the 'Treasures' table
    await queryInterface.bulkDelete('Treasures', null, {});
  }
};

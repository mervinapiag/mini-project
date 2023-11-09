'use strict';
const {
  Model
} = require('sequelize');
const MoneyValue = require('./moneyvalue'); // Adjust the path accordingly

module.exports = (sequelize, DataTypes) => {
  class Treasure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Treasure.hasMany(models.MoneyValue, {
        foreignKey: 'treasure_id',
        as: 'moneyValues',
      });
    }
  }
  Treasure.init({
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Treasure',
  });
  return Treasure;
};
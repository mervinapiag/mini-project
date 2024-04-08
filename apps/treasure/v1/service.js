'use strict';

const { InvalidZone } = require("luxon");
const models = require("../../../models");
const geolib = require('geolib');
const MoneyValue = models.MoneyValue;
/**
 * Find nearby treasures based on the provided location and distance.
 *
 * @param {Object} data - The data object containing latitude, longitude, and distance.
 * @param {number} data.latitude - The latitude of the user's location.
 * @param {number} data.longitude - The longitude of the user's location.
 * @param {string} data.distance - The distance within which to find nearby treasures (should be '1' or '10').
 * @returns {Promise<Object>} A Promise that resolves to an object containing nearby treasures.
 * @throws {Error} If there is an issue with retrieving or filtering treasures.
 */

exports.findTreasure = async (data) => {
    const { latitude, longitude, distance,prize_value  } = data;
  // Validate required fields
  if (!latitude || !longitude || !distance) {
    throw new Error('Latitude, longitude, and distance are required.');
  }

  // Validate distance value
  if (distance !== '1' && distance !== '10') {
    throw new Error('Distance must be either 1 or 10 km.');
  }

  const userLocation = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };

  try {
    // Fetch all treasures
    const allTreasures = await models.Treasure.findAll({
      include: [{
        model: MoneyValue,
        as: 'moneyValues',
      }],
    });

    // Filter nearby treasures
    const nearbyTreasures = allTreasures.filter(treasure => {
      const treasureLocation = { latitude: parseFloat(treasure.latitude), longitude: parseFloat(treasure.longitude) };
      const distanceInMeters = geolib.getDistance(userLocation, treasureLocation);
      const distanceInKm = geolib.convertDistance(distanceInMeters, 'km');
    
      // Check distance and prize_value
      return (
        distanceInKm <= parseFloat(distance) &&
        (!prize_value ||
          treasure.moneyValues.filter(moneyValue => parseFloat(prize_value) > parseFloat(moneyValue.amt))
        )
      );
    });

    return nearbyTreasures;

  } catch (error) {
    console.log(error);
    throw new Error('Internal Server Error');
  }
};
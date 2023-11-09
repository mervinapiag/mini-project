'use strict';

const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const controller = require('./controller');

// Validation schema for finding treasures
const findTreasureSchema = Joi.object({
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    distance: Joi.string().valid('1', '10').required(),
    prize_value: Joi.number().min(10).max(30),
  })

// routes for todo
function routes() {
    router.get('/find-treasures', validator.body(findTreasureSchema), controller.findTreasure());

    return router;
}

module.exports = routes;
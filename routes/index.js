'use strict';

const express = require('express');
const routes = express.Router();

// v1 apis
const treasure = require("../apps/treasure/v1");
routes.use('/v1/treasures', treasure());
//end: v1 apis

module.exports = routes;
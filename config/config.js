'use strict';
require('dotenv').config();
const process = require('process');
/** this config is for sequelize migration tool  */
module.exports = {
    development: {
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: "mysql"
    },
    test: {
        database: process.env.DATABASE_TEST_NAME,
        username: process.env.DATABASE_TEST_USERNAME,
        password: process.env.DATABASE_TEST_PASSWORD,
        host: process.env.DATABASE_TEST_HOST,
        port: process.env.DATABASE_TEST_PORT,
        dialect: "mysql"
    },
    production: {
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: "mysql"
    }
};

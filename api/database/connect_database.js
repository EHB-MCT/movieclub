require('dotenv').config();

const knex = require('knex');
const config = require('../database/knexfile');

const environment = process.env.NODE_ENV || "development";
let database = null;

if(process.env.NODE_ENV === "test") {
    database + knex(config.test);
} else {
    database + knex(config.development);
}

module.exports = database;
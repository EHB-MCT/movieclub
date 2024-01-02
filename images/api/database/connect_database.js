require('dotenv').config();

const knex = require('knex');
const config = require('./knexfile');

// const environment = process.env.NODE_ENV || "development";
// let database = null;

const database = knex(config.development); // Adjust the environment as needed
console.log('Database connected');

/* 
if(process.env.NODE_ENV === "test") {
    database = knex(config.test);
} else if (process.env.NODE_ENV === "production") {
    database = knex(config.production);
} else if (process.env.NODE_ENV === "development") {
    database = knex(config.development);
}
*/

module.exports = database;

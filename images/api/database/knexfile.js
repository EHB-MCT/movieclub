// Update with your config settings.
require('dotenv').config();
const path = require("path");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host:     'database',
      port:     5432,
      database: "movieclub",
      user:     "admin",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeders'
    },
  },
  
  test: {
    client: "postgresql",
    useNullAsDefault: true,
    connection: {
      host:     'database',
      port:     5432,
      database: "movieclub_test",
      user:     "admin",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeders'
    },
  },

  production: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
      host:     'database',
      port:     5432,
      database: "movieclub_production",
      user:     "admin",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeders'
    },
  },
};

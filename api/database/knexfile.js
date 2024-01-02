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
      host:     'postgres',
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
    connection: ":memory:",
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, "migrations")
    },
    seeds: {
      directory: path.join(__dirname, "seeds")
    }
  },
};

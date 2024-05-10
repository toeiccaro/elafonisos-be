const dotenv = require('dotenv');
dotenv.config({ path: './.env' })

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      ssl: false
    },
    pool: { min: 2, max: 30, acquireTimeoutMillis: 60 * 1000 },
    migrations: {
      tableName: 'strapi_postfix_migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      ssl: false
    },
    pool: { min: 2, max: 30, acquireTimeoutMillis: 60 * 1000 },
    migrations: {
      tableName: 'strapi_postfix_migrations'
    }
  },
};

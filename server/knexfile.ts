import type { Knex } from "knex";
import { env } from './env';

// Update with your config settings.

// JWT_SECRET=unipiece
// POSTGRES_DB=unipiece
// POSTGRES_HOST=localhost
// POSTGRES_PASSWORD=postgres
// POSTGRES_USER=postgres

export const configs: { [key: string]: Knex.Config } = {
   development: {
      client: "pg",
      connection: {
         database: env.DB,
         user: env.USER,
         password: env.PASSWORD,
         host: env.HOST,
      },
      pool: {
         min: 2,
         max: 10
      },
      migrations: {
         tableName: "knex_migrations"
      },
   },

   test: {
      client: "pg",
      connection: {
         database: env.DB,
         user: env.USER,
         password: env.PASSWORD,
         host: env.HOST,
      },
      pool: {
         min: 2,
         max: 10
      },
      migrations: {
         tableName: "knex_migrations"
      },
   },

   production: {
      client: "pg",
      connection: {
         database: env.DB,
         user: env.USER,
         password: env.PASSWORD,
         host: env.HOST,
      },
      pool: {
         min: 2,
         max: 10
      },
      migrations: {
         tableName: "knex_migrations"
      },
   }

};

module.exports = configs;

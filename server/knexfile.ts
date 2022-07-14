import type { Knex } from "knex";
import { env } from './env';

// Update with your config settings.

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

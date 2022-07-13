import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {

   await knex.schema.table('series', table => {
      table.integer('creator_id').unsigned().notNullable().references('users.id')
      table.integer('credit_id').unsigned().nullable().references('users.id')
   })

   await knex.schema.table('product', table => {
      table.integer('type').unsigned().notNullable().references('product_type.product_type_id')
      table.integer('owner_id').unsigned().notNullable().references('users.id')
      table.integer('series_id').unsigned().nullable().references('series.id')
      table.integer('category_id').unsigned().notNullable().references('category.id')
   })

   await knex.schema.table('collection', table => {
      table.integer('users_id').unsigned().notNullable().references('users.id')
      table.integer('product_id').unsigned().notNullable().references('product.id')
   })

   await knex.schema.table('order', table => {
      table.integer('product_type').unsigned().notNullable().references('product_type.product_type_id')
      table.integer('owner_id').unsigned().notNullable().references('users.id')
      table.integer('receiver_id').unsigned().nullable().references('users.id')
      table.integer('product_id').unsigned().notNullable().references('product.id')
   })

}

/* ------------------below is knex migrate down-------------------- */

export async function down(knex: Knex): Promise<void> {


   await knex.schema.table('series', table => {
      table.dropColumn('creator_id')
      table.dropColumn('credit_id')
   })

   await knex.schema.table('product', table => {
      table.dropColumn('owner_id')
      table.dropColumn('series_id')
      table.dropColumn('category_id')
   })

   await knex.schema.table('collection', table => {
      table.dropColumn('users_id')
      table.dropColumn('product_id')
   })

   await knex.schema.table('order', table => {
      table.dropColumn('product_type')
      table.dropColumn('owner_id')
      table.dropColumn('receiver_id')
      table.dropColumn('product_id')
   })

}

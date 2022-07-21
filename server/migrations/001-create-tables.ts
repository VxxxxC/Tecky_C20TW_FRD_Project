import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable('users'))) {
    await knex.schema.createTable('users', table => {
      table.increments('id')
      table.string('email', 255).notNullable().unique()
      table.string('password', 128).notNullable()
      table.string('name', 128).nullable()
      table.string('username', 128).nullable()
      table.decimal('token_amount', 7, 3).nullable()
      table.string('wallet_address', 255).nullable()
      table.string('publickey', 255).nullable()
      table.string('image', 255).nullable()
      table.string('bg_image', 255).nullable()
      table.timestamp('created_at').notNullable()
      table.string('shipping_address', 255).nullable()
      table.integer('style').nullable()
      table.text('bio').nullable()
    })
  }


  if (!(await knex.schema.hasTable('series'))) {
    await knex.schema.createTable('series', table => {
      table.increments('id')
      table.string('name', 128).nullable()
      table.text('bio').nullable()
      table.string('image', 255).nullable()
      table.string('bg_image', 255).nullable()
      table.text('credit_by').nullable()
    })
  }

  if (!(await knex.schema.hasTable('category'))) {
    await knex.schema.createTable('category', table => {
      table.increments('id')
      table.string('name', 255).notNullable()
    })
  }

  if (!(await knex.schema.hasTable('contribution'))) {
    await knex.schema.createTable('contribution', table => {
      table.increments('id')
    })
  }

  if (!(await knex.schema.hasTable('product'))) {
    await knex.schema.createTable('product', table => {
      table.increments('id')
      table.string('name', 128).notNullable()
      table.integer('price').notNullable()
      table.enum('type', ['virtual', 'physical']).notNullable()
      table.string('nft_address', 255).nullable()
      table.string('image', 255).nullable()
      table.text('content').nullable()
      table.integer('quantity').nullable()
      table.integer('status').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
      table.text('credit_by').nullable()
    })
  }

  if (!(await knex.schema.hasTable('order'))) {
    await knex.schema.createTable('order', table => {
      table.increments('id')
      table.integer('order_type').notNullable()
      table.string('owner_publickey', 255).notNullable()
      table.string('receiver_publickey', 255).nullable()
      table.string('product_nft_address', 255).notNullable()
      table.string('product_series_id', 255).nullable()
      table.integer('quantity').nullable()
      table.integer('total_price').nullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('timeout_at').nullable()
      table.string('shipping_address', 255).nullable()
      table.enum('shipping_status', ['pending', 'shipping', 'shipped']).nullable()
      table.enum('status', ['pending', 'finished', 'failed']).notNullable()
    })
  }

  if (!(await knex.schema.hasTable('collection'))) {
    await knex.schema.createTable('collection', table => {
      table.increments('id')
      table.string('name', 255).notNullable()
    })
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('collection')
  await knex.schema.dropTableIfExists('order')
  await knex.schema.dropTableIfExists('product')
  await knex.schema.dropTableIfExists('category')
  await knex.schema.dropTableIfExists('series')
  await knex.schema.dropTableIfExists('product_type')
  await knex.schema.dropTableIfExists('user_profile')
  await knex.schema.dropTableIfExists('users')
}

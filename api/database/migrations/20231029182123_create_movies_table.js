/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('movies', (table) => {
        table.increments('id').primary(); // Primary key
        table.text('name').notNullable();
        table.integer('genre_id').notNullable();
        table.integer('tmdb_id').notNullable();
        table.boolean('is_watched').notNullable().defaultTo(false);
        table.boolean('is_favorite').notNullable().defaultTo(false);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies');
};

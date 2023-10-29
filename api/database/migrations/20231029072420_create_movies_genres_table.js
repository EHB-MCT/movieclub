/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('movies_genres', (table) => {
        table.increments('id').primary(); // Primary key
        // table.integer('movie_id').unsigned().references('movies.id').inTable('movies');
        // table.integer('genre_id').unsigned().references('genres.id').inTable('genres');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies_genres');
};

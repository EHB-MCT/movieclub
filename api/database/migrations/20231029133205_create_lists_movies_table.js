/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('lists_movies', (table) => {
        table.increments('id').primary(); // Primary key
        // table.integer('list_id').unsigned().references('lists.id');
        // table.integer('movie_id').unsigned().references('movies.id');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        // table.unique(['list_id', 'movie_id']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('lists_movies');
};

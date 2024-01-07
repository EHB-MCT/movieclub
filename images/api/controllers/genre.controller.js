const knex = require("../database/connect_database")

// Retrieve all movies
const getAllGenres = async() => {
    return await knex('genres').select('*');
};

// Retrieve a movie by ID
const getGenreById = async(genreId) => {
    return await knex('genres').where({ id: genreId }).first();
};

// Create a new movie
const createGenre = async( genreData ) => {
    return await knex('genres').insert(genreData);
};

// Update a movie by ID
const updateGenre = async(genreId, updatedData) => {
    return await knex('genres').where({ id: genreId }).update(updatedData);
};

// Delete movie by ID
const deleteGenre = async(genreId) => {
    return await knex('genres').where({ id: genreId }).del();
}

module.exports = {
    getAllGenres,
    getGenreById,
    createGenre,
    updateGenre,
    deleteGenre
}
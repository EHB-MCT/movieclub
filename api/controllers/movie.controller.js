const knex = require("../database/connect_database")

// Retrieve all movies
const getAllMovies = async() => {
    return await knex('movies').select('*');
};

// Retrieve all watched movies
const getAllWatchedMovies = async() => {
    return await knex('movies').select('*').where("is_watched", true);
};

// Retrieve all favorite movies
const getAllFavoriteMovies = async() => {
    return await knex('movies').select('*').where("is_favorite", true);
};

// Retrieve a movie by ID
const getMovieById = async(movieId) => {
    return await knex('movies').where({ id: movieId }).first();
};

// Create a new movie
const createMovie = async( movieData ) => {    
    return await knex('movies').insert(movieData);
};

// Update a movie by ID
const updateMovie = async(movieId, updatedData) => {
    return await knex('movies').where({ id: movieId }).update(updatedData);
};

// Delete movie by ID
const deleteMovie = async(movieId) => {
    return await knex('movies').where({ id: movieId }).del();
}

module.exports = {
    getAllMovies,
    getAllWatchedMovies,
    getAllFavoriteMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
}
const express = require("express");
const router = express.Router();

const knex = require("../database/connect_database")
router.use(express.json());

const movies = require('../controllers/movie.controller')

/**
 * Retrieve all movies.
 *
 * @route GET /api/v1/movies
 * @returns {array} - An array of all movies.
 * @throws {object} - Returns a 500 Internal Server Error if the retrieval fails.
 */
router.get("/", async(req, res) => {
    try {
        const allMovies = await movies.getAllMovies();
        res.json(allMovies);
    } catch (error) {
        console.error('Error retrieving movies: ', error);
        res.status(500).json({ error: 'Failed to retrieve movies.' });
    }
});

/**
 * Retrieve all watched movies.
 *
 * @route GET /api/v1/movies/watched
 * @returns {array} - An array of all watched movies.
 * @throws {object} - Returns a 500 Internal Server Error if the retrieval fails.
 */
router.get("/watched", async(req, res) => {
    try {
        const allWatchedMovies = await movies.getAllWatchedMovies();
        res.json(allWatchedMovies);
    } catch (error) {
        console.error('Error retrieving watched movies: ', error);
        res.status(500).json({ error: 'Failed to retrieve watched movies.' });
    }
});

/**
 * Retrieve all favorites movies.
 *
 * @route GET /api/v1/movies/favorites
 * @returns {array} - An array of all favorites movies.
 * @throws {object} - Returns a 500 Internal Server Error if the retrieval fails.
 */
router.get("/favorites", async(req, res) => {
    try {
        const allFavoriteMovies = await movies.getAllFavoriteMovies();
        res.json(allFavoriteMovies);
    } catch (error) {
        console.error('Error retrieving favorite movies: ', error);
        res.status(500).json({ error: 'Failed to retrieve favorite movies.' });
    }
});

/**
 * Retrieve a movie by ID.
 *
 * @route GET /api/v1/movies/:id
 * @param {string} req.params.id - The ID of the movie to retrieve.
 * @returns {object} - The movie with the specified ID.
 * @throws {object} - Returns a 404 Not Found if the movie is not found, or a 500 Internal Server Error if retrieval fails.
 */
router.get("/:id", async(req, res) => {
    const movieId = req.params.id;
    try {
        const movie = await movies.getMovieById(movieId);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found.' });
        }
        res.json(movie);
    } catch (error) {
        console.error('Error retrieving movie: ', error);
        res.status(500).json({ error: 'Failed to retrieve movie.' });
    }
});

/**
 * Create a new movie.
 *
 * @route POST /api/v1/movies
 * @param {object} req.body - The movie data to be created.
 * @returns {object} - The newly created movie.
 * @throws {object} - Returns a 500 Internal Server Error if the creation fails.
 */
router.post("/", async(req, res) => {  
    try {
        const movie = await movies.createMovie(req.body);
        res.status(201).json(movie);
    } catch (error) {
        console.error('Error creating movie: ', error);
        res.status(500).json({ error: 'Failed to create movie.' });
    }
})

/**
 * Update a movie by ID.
 *
 * @route PUT /api/v1/movies/:id
 * @param {string} req.params.id - The ID of the movie to update.
 * @param {object} req.body - The updated movie data.
 * @returns {string} - A success message.
 * @throws {object} - Returns a 500 Internal Server Error if the update fails.
 */
router.put("/:id", async(req, res) => {
    const movieId = req.params.id;
    try {
        await movies.updateMovie(movieId, req.body);
        res.status(204).end();
    } catch (error) {
        console.error('Error updating movie: ', error);
        res.status(500).json({ error: 'Failed to update movie.' });
    }
})

/**
 * Delete a movie by ID.
 *
 * @route DELETE /api/v1/movies/:id
 * @param {string} req.params.id - The ID of the movie to delete.
 * @returns {string} - A success message.
 * @throws {object} - Returns a 500 Internal Server Error if the deletion fails.
 */
router.delete("/:id", async(req, res) => {
    const movieId = req.params.id;
    try {
        await movies.deleteMovie(movieId);
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting movie: ', error);
        res.status(500).json({ error: 'Failed to delete movie.' });
    }
});

module.exports = router;
const express = require("express");
const router = express.Router();

const knex = require("../database/connect_database")
router.use(express.json());

const genres = require('../controllers/genre.controller')

/**
 * Retrieve all genres.
 *
 * @route GET /api/v1/genres
 * @returns {array} - An array of all genres.
 * @throws {object} - Returns a 500 Internal Server Error if the retrieval fails.
 */
router.get("/", async(req, res) => {
    try {
        const allGenres = await genres.getAllGenres();
        res.json(allGenres);
    } catch (error) {
        console.error('Error retrieving genres: ', error);
        res.status(500).json({ error: 'Failed to retrieve genres.' });
    }
})

/**
 * Retrieve a genre by ID.
 *
 * @route GET /api/v1/genres/:id
 * @param {string} req.params.id - The ID of the genre to retrieve.
 * @returns {object} - The genre with the specified ID.
 * @throws {object} - Returns a 404 Not Found if the movie is not found, or a 500 Internal Server Error if retrieval fails.
 */
router.get("/:id", async(req, res) => {
    const genreId = req.params.id;
    try {
        const genre = await genres.getGenreById(genreId);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found.' });
        }
        res.json(genre);
    } catch (error) {
        console.error('Error retrieving genre: ', error);
        res.status(500).json({ error: 'Failed to retrieve genre.' });
    }
})

/**
 * Create a new genre.
 *
 * @route POST /api/v1/genres
 * @param {object} req.body - The genre data to be created.
 * @returns {object} - The newly created genre
 * @throws {object} - Returns a 500 Internal Server Error if the creation fails.
 */
router.post("/", async(req, res) => {
    try {
        const genre = await genres.createGenre(req.body);
        res.status(201).json(genre);
    } catch (error) {
        console.error('Error creating genre: ', error);
        res.status(500).json({ error: 'Failed to create genre.' });
    }
})

/**
 * Update a genre by ID.
 *
 * @route PUT /api/v1/genres/:id
 * @param {string} req.params.id - The ID of the genre to update.
 * @param {object} req.body - The updated genre data.
 * @returns {string} - A success message.
 * @throws {object} - Returns a 500 Internal Server Error if the update fails.
 */
router.put("/:id", async(req, res) => {
    const genreId = req.params.id;
    try {
        await genre.updateGenre(genreId, req.body);
        res.status(204).end();
    } catch (error) {
        console.error('Error updating genre: ', error);
        res.status(500).json({ error: 'Failed to update genre.' });
    }
})

/**
 * Delete a genre by ID.
 *
 * @route DELETE /api/v1/genres/:id
 * @param {string} req.params.id - The ID of the genre to delete.
 * @returns {string} - A success message.
 * @throws {object} - Returns a 500 Internal Server Error if the deletion fails.
 */
router.delete("/:id", async(req, res) => {
    const genreId = req.params.id;
    try {
        await genres.deleteGenre(genreId);
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting genre: ', error);
        res.status(500).json({ error: 'Failed to delete genre.' });
    }
})

/**
 * Retrieve all movies with a specific genre.
 *
 * @route GET /api/v1/genres/:id/movies
 * @param {string} req.params.id - The ID of the genre to retrieve.
 * @returns {array} - An array of all movies with specific genre.
 * @throws {object} - Returns a 404 Not Found if the movie is not found, or a 500 Internal Server Error if retrieval fails.
 */
router.get("/:id/movies", async(req, res) => {
    const genreId = req.params.id;
    try {
        knex('movies')
            .join('movies_genres', 'movies.id', '=', 'movies_genres.movie_id')
            .where('movies_genres.genre_id', genreId)
            .select('movies.name as movie_name')
            .then(movies => {
                res.json(movies);
            })
    } catch (error) {
        console.error('Error retrieving movies: ', error);
        res.status(500).json({ error: 'Failed to retrieve movies.' });
    }
})

module.exports = router;
const express = require("express");
const router = express.Router();

const knex = require("../database/connect_database")
router.use(express.json());

const lists = require('../controllers/list.controller')

/**
 * Retrieve all lists.
 *
 * @route GET /api/v1/lists
 * @returns {array} - An array of all lists.
 * @throws {object} - Returns a 500 Internal Server Error if the retrieval fails.
 */
router.get("/", async(req, res) => {
    try {
        const allLists = await lists.getAllLists();
        res.json(allLists);
    } catch (error) {
        console.error('Error retrieving lists: ', error);
        res.status(500).json({ error: 'Failed to retrieve lists.' });
    }
});

/**
 * Retrieve a list by ID.
 *
 * @route GET /api/v1/lists/:id
 * @param {string} req.params.id - The ID of the list to retrieve.
 * @returns {object} - The list with the specified ID.
 * @throws {object} - Returns a 404 Not Found if the list is not found, or a 500 Internal Server Error if retrieval fails.
 */
router.get("/:id", async(req, res) => {
    const listId = req.params.id;
    try {
        const list = await lists.getListById(listId);
        if (!list) {
            return res.status(404).json({ error: 'Movie not found.' });
        }
        res.json(list);
    } catch (error) {
        console.error('Error retrieving list: ', error);
        res.status(500).json({ error: 'Failed to retrieve list.' });
    }
});

/**
 * Create a new list.
 *
 * @route POST /api/v1/lists
 * @param {object} req.body - The list data to be created.
 * @returns {object} - The newly created list.
 * @throws {object} - Returns a 500 Internal Server Error if the creation fails.
 */
router.post("/", async(req, res) => {  
    try {
        const list = await lists.createList(req.body);
        res.status(201).json(list);
    } catch (error) {
        console.error('Error creating list: ', error);
        res.status(500).json({ error: 'Failed to create list.' });
    }
})

/**
 * Update a list by ID.
 *
 * @route PUT /api/v1/lists/:id
 * @param {string} req.params.id - The ID of the list to update.
 * @param {object} req.body - The updated list data.
 * @returns {string} - A success message.
 * @throws {object} - Returns a 500 Internal Server Error if the update fails.
 */
router.put("/:id", async(req, res) => {
    const listId = req.params.id;
    try {
        await lists.updateList(listId, req.body);
        res.status(204).end();
    } catch (error) {
        console.error('Error updating list: ', error);
        res.status(500).json({ error: 'Failed to update list.' });
    }
})

/**
 * Delete a list by ID.
 *
 * @route DELETE /api/v1/lists/:id
 * @param {string} req.params.id - The ID of the list to delete.
 * @returns {string} - A success message.
 * @throws {object} - Returns a 500 Internal Server Error if the deletion fails.
 */
router.delete("/:id", async(req, res) => {
    const listId = req.params.id;
    try {
        await lists.deleteList(listId);
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting list: ', error);
        res.status(500).json({ error: 'Failed to delete list.' });
    }
});

module.exports = router;
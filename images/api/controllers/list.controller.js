const knex = require("../database/connect_database")

// Retrieve all lists
const getAllLists = async() => {
    return await knex('lists').select('*');
};

// Retrieve a movie by ID
const getListById = async(listId) => {
    return await knex('lists').where({ id: listId }).first();
};

// Create a new movie
const createList = async( listData ) => {    
    return await knex('lists').insert(listData);
};

// Update a movie by ID
const updateList = async(listId, updatedData) => {
    return await knex('lists').where({ id: listId }).update(updatedData);
};

// Delete movie by ID
const deleteList = async(listId) => {
    return await knex('lists').where({ id: listId }).del();
}

module.exports = {
    getAllLists,
    getListById,
    createList,
    updateList,
    deleteList,
}
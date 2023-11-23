/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  return knex('movies').insert([
    {name: "Dark Star", tmdb_id: 1410, is_watched: true, is_favorite: false},
    {name: "Cocaine Cowboys", tmdb_id: 170696, is_watched: false, is_favorite: false},
    {name: "Moonraker", tmdb_id: 698, is_watched: true, is_favorite: false},
    {name: "Firefox", tmdb_id: 10724, is_watched: true, is_favorite: false},
    {name: "The Keep", tmdb_id: 26198, is_watched: false, is_favorite: false},
    {name: "Young Frankenstein", tmdb_id: 3034, is_watched: true, is_favorite: false},
    {name: "Coco", tmdb_id: 354912, is_watched: false, is_favorite: false},
    {name: "The Super Mario Bros. Movie", tmdb_id: 502356, is_watched: true, is_favorite: false},
    {name: "Transformers: Rise of the Beasts", tmdb_id: 667538, is_watched: false, is_favorite: false},
    {name: "2001: A Space Odyssey", tmdb_id: 62, is_watched: false, is_favorite: false},

  ]);
};

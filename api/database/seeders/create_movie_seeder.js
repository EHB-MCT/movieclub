/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const movies = await knex('movies').select('*');

  if(movies.length) {
    console.log('Movie seeder has already been executed, skipping...');
    return;
  }

  return knex('movies').insert([
    {name: "Dark Star", genre_id: 5, tmdb_id: 1410, is_watched: false, is_favorite: false},
    {name: "Cocaine Cowboys", genre_id: 6, tmdb_id: 170696, is_watched: false, is_favorite: false},
    {name: "Moonraker", genre_id: 1, tmdb_id: 698, is_watched: false, is_favorite: false},
    {name: "Firefox", genre_id: 1, tmdb_id: 10724, is_watched: false, is_favorite: false},
    {name: "The Keep", genre_id: 13, tmdb_id: 26198, is_watched: false, is_favorite: false},
    {name: "Young Frankenstein", genre_id: 5, tmdb_id: 3034, is_watched: false, is_favorite: false},
    {name: "Coco", genre_id: 9, tmdb_id: 354912, is_watched: false, is_favorite: false},
    {name: "The Super Mario Bros. Movie", genre_id: 3, tmdb_id: 502356, is_watched: false, is_favorite: false},
    {name: "Transformers: Rise of the Beasts", genre_id: 1, tmdb_id: 667538, is_watched: false, is_favorite: false},
    {name: "2001: A Space Odyssey", genre_id: 18, tmdb_id: 62, is_watched: false, is_favorite: false},
  ]);
};

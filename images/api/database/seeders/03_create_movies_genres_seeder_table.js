/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  let data = await knex('movies_genres');
  if(data.length === 0) {
    return knex('movies_genres').insert([
      { movie_id: 1, genre_id: 5 },
      { movie_id: 1, genre_id: 18},
      { movie_id: 2, genre_id: 6 },
      { movie_id: 2, genre_id: 8 },
      { movie_id: 3, genre_id: 1 },
      { movie_id: 3, genre_id: 2 },
      { movie_id: 3, genre_id: 22 },
      { movie_id: 3, genre_id: 18 },
      { movie_id: 4, genre_id: 1 },
      { movie_id: 4, genre_id: 2 },
      { movie_id: 4, genre_id: 22 },
      { movie_id: 4, genre_id: 18 },
      { movie_id: 5, genre_id: 13 },
      { movie_id: 5, genre_id: 10 },
      { movie_id: 5, genre_id: 8 },
      { movie_id: 6, genre_id: 5 },
      { movie_id: 7, genre_id: 2 },
      { movie_id: 7, genre_id: 9 },
      { movie_id: 7, genre_id: 10 },
      { movie_id: 7, genre_id: 14 },
      { movie_id: 7, genre_id: 3 },
      { movie_id: 7, genre_id: 5 },
      { movie_id: 8, genre_id: 3 },
      { movie_id: 8, genre_id: 9 },
      { movie_id: 8, genre_id: 2 },
      { movie_id: 8, genre_id: 10 },
      { movie_id: 8, genre_id: 5 },
    ]);
  };
};

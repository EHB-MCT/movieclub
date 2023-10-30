/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const genres = await knex('genres').select('*');

  if(genres.length) {
    console.log('Genre seeder has already been executed, skipping...');
    return;
  }

  return knex('genres').insert([
    { name: 'Action' },
    { name: 'Adventure' },
    { name: 'Animation' },
    { name: 'Biography' },
    { name: 'Comedy' },
    { name: 'Crime' },
    { name: 'Documentary' },
    { name: 'Drama' },
    { name: 'Family' },
    { name: 'Fantasy' },
    { name: 'Film Noir' },
    { name: 'History' },
    { name: 'Horror' },
    { name: 'Music' },
    { name: 'Musical' },
    { name: 'Mystery' },
    { name: 'Romance' },
    { name: 'Sci-Fi' },
    { name: 'Short Film' },
    { name: 'Sport' },
    { name: 'Superhero' },
    { name: 'Thriller' },
    { name: 'War' },
    { name: 'Western' }
  ]);
};

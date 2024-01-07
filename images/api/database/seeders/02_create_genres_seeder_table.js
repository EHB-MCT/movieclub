/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  let data = await knex('genres');
  if(data.length === 0) {
    return knex('genres').insert([
      { name: 'action' },
      { name: 'adventure' },
      { name: 'animation' },
      { name: 'biography' },
      { name: 'comedy' },
      { name: 'crime' },
      { name: 'documentary' },
      { name: 'drama' },
      { name: 'family' },
      { name: 'fantasy' },
      { name: 'film noir' },
      { name: 'history' },
      { name: 'horror' },
      { name: 'music' },
      { name: 'musical' },
      { name: 'mystery' },
      { name: 'romance' },
      { name: 'sci-fi' },
      { name: 'short film' },
      { name: 'sport' },
      { name: 'superhero' },
      { name: 'thriller' },
      { name: 'war' },
      { name: 'western' }
    ]);
  } else { 
    return; 
  };
};

const { Model } = require('objection');

class Movie extends Model {
  static get tableName() {
    return 'movies';
  }

  static get relationMappings() {
    return {
      genres: {
        relation: Model.ManyToManyRelation,
        modelClass: Genre,
        join: {
          from: 'movies.id',
          through: {
            from: 'movies_genres.movie_id',
            to: 'movies_genres.genre_id',
          },
          to: 'genres.id',
        },
      },
    };
  }
}

module.exports = Movie;

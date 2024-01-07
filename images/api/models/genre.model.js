const { Model } = require('objection');

class Genre extends Model {
  static get tableName() {
    return 'genres';
  }

  static get relationMappings() {
    return {
      movies: {
        relation: Model.ManyToManyRelation,
        modelClass: Movie,
        join: {
          from: 'genres.id',
          through: {
            from: 'movies_genres.genre_id',
            to: 'movies_genres.movie_id',
          },
          to: 'movies.id',
        },
      },
    };
  }
}

module.exports = Genre;

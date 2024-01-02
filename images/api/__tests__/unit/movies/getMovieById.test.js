const request = require('supertest');
const express = require('express');
const router =  require('../../../routes/movies.route');
const movies = require('../../../controllers/movie.controller');

const app = express();

app.use('/api/v1/movies', router);

describe('GET /api/v1/movies/:id', () => {
    it('should return the movie with a specific ID', async () => {
        const exampleMovie = { id: 1, name: 'Action' };
        
        jest.spyOn(movies, 'getMovieById').mockResolvedValueOnce(exampleMovie);
        const response = await request(app).get('/api/v1/movies/1');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(exampleMovie);
    })
})
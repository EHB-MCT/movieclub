const request = require('supertest');
const express = require('express');
const router =  require('../../../routes/genres.route');
const genres = require('../../../controllers/genre.controller');

const app = express();

app.use('/api/v1/genres', router);

describe('GET /api/v1/genres/:id', () => {
    it('should return the genre with a specific ID', async () => {
        const exampleGenre = { id: 1, name: 'Action' };
        
        jest.spyOn(genres, 'getGenreById').mockResolvedValueOnce(exampleGenre);

        const response = await request(app).get('/api/v1/genres/1');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(exampleGenre);
    })
})
const request = require('supertest');
const express = require('express');
const router =  require('../../../routes/genres.route');
const genres = require('../../../controllers/genre.controller');

const app = express();

jest.mock('../../../controllers/genre.controller', () => ({
    getAllGenres: jest.fn(),
}));

app.use('/api/v1/genres', router);

describe('/api/v1/genres', () => {
    it('GET / should return a list of genres', async () => {
        const exampleGenres = [
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
        ];
        genres.getAllGenres.mockResolvedValue(exampleGenres);
    
        const response = await request(app).get('/api/v1/genres');
    
        expect(response.status).toBe(200);
        expect(response.body).toEqual(exampleGenres);
    });
  
    it('GET / should handle errors and return 500 status', async () => {
        genres.getAllGenres.mockRejectedValue(new Error('Internal Server Error'));
    
        const response = await request(app).get('/api/v1/genres');
        expect(response.status).toBe(500);
    });
});
  
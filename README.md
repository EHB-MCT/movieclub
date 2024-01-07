# Movieclub

An app that lets you discover new films, log your watch history, connect with fellow movie enthusiasts, and engage in enlightening discussions. MovieClub is your passport to the cinematic universe.

test environment
docker-compose -f docker-compose.test.yml --env-file .env.test up

## Quick Start
Clone the repository using GitHub CLI
```
gh repo clone EHB-MCT/movieclub
```
Copy the .env.example file to a new file called .env.

Run the following command to build and start the project using Docker Compose:
```
docker-compose up --build
```

## Configuration
It is currently advised to use the following values for the .env file:
```
PG_USER=YOUR_USERNAME
PG_PASSWORD=YOUR_PASSWORD
PG_DB=YPUR_POSTGRES_DATABASE
POSTGRES_HOST_AUTH_METHOD="trust"
```

## API Reference

### Genres

#### Get all genres

```http
  GET /api/v1/genres
```

#### Get specific genre

```http
  GET /api/v1/genres/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Get all movies with specific genre

```http
  GET /api/v1/genres/${id}/movies
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Add genre

```http
  POST /api/v1/genres
```

#### Update genre

```http
  PUT /api/v1/genres/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |


#### Delete genre

```http
  DELETE /api/v1/genres/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |


### Movies

#### Get all movies

```http
  GET /api/v1/movies
```

#### Get all watched movies

```http
  GET /api/v1/movies/watched
```

#### Get all favorite movies

```http
  GET /api/v1/movies/favorites
```

#### Get specific movie

```http
  GET /api/v1/movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Add genre

```http
  POST /api/v1/movies
```

#### Update genre

```http
  PUT /api/v1/movies/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |


#### Delete genre

```http
  DELETE /api/v1/movies/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |


## Reporting Issues
If you encounter any issues with the project, please open a GitHub issue with a clear and descriptive title, including details about the problem and how to reproduce it.

## Code of Conduct
Please review and adhere to our Code of Conduct to ensure a respectful and inclusive enviroment for all contributors.

## License
This license is supported under the GNU GENERAL PUBLIC LICENSE
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

// Define routes
const genres = require("./routes/genres.route")
const lists = require("./routes/lists.route")
const movies = require("./routes/movies.route")

// Show info page
app.get('/', (req, res) => {
    res.status(300).redirect('/info.html')
});

// Use routes
app.use("/api/v1/genres", genres);
app.use("/api/v1/lists", lists);
app.use("/api/v1/movies", movies);

// Export app
module.exports = app;
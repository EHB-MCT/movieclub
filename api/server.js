require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

// Show info page
app.get('/', (req, res) => {
    res.status(300).redirect('/info.html')
});

// Export app
module.exports = app;
const express = require('express');
const app = express();

app.use(express.json());

const books = require('./routes/books')

app.use("/api/v1", books);

module.exports = app;

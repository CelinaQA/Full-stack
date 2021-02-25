'use strict';

const express = require("express");
const cors = require('cors');
const createError = require('http-errors');

// instantiate my app
const app = express();

app.use(cors());
app.use(express.json()); // body parser - must come before route

const taskRoute = require("./routes/tasks");

app.use("/task", taskRoute);

// error handling
app.use((req, res, next) => {
    next(createError(404, `Resource not found`));
})

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || `Something went wrong`);
});

// communicate with the app on a specific port
const server = app.listen(5001, () => {
    console.log(`Server: ${server.address().port}`)
})

module.exports = server;
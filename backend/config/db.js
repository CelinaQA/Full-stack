'use strict';

const { NotExtended } = require('http-errors');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { DB_URL, DB_NAME } = require('./CONSTS.json');

const taskSchema = new Schema({
    description: { type: String, required: true },
    isDone: Boolean
});

const Task = model('Task', taskSchema);

mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
        next(err);
    } else {
        console.log(`Connected successfully`);
    }
})

module.exports = { "Task": Task };
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoData = new Schema({
    title: String,
    description: String,
    completed: Boolean,
    dataId : Schema.ObjectId
});

mongoose.model('todos',todoData);







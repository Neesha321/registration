const mongoose = require('mongoose');
require('../Models/models');



exports.initialPage = function (req, res) {
    res.send("Hello! Darkness my old friend");
}


exports.getAllTodoLists = function (req, res) {
    mongoose.model('todos').find(function(err,result){
        if (err){
            res.send("hello");
        }
        console.log("Data has been Listed" +result +"hello");
        res.send(result);
    });
};




exports.getTodoListById = function (req, res) {
    mongoose.model('todos').find({"_id": req.params.todoId},function(err,result){
        if (err){
            res.send("hello");
        }
        console.log("Data has been Listed");
        res.send(result);
    });
};



exports.insertTodo = function (req, res) {
    var data={
        title: req.body.title,
        description : req.body.description,
        completed : req.body.completed
    }
    console.log(data);
    mongoose.model('todos').create(data,function(err,result){
        if(err){
            res.send("hello");
        }
        console.log("Data has been inserted");
        res.send('Data has been Inserted');
    });
};


exports.deleteTodo = function (req, res) {
    var id = req.body.todoId;
    mongoose.model('todos').deleteOne({"_id": id},function (err,result){
        if(err){
            res.send("hello");
        }
        console.log("Data has been deleted");
        res.send('Data has been deleted');
    });
};


exports.editTodo = function (req, res) {
    mongoose.model('todos').updateOne(
        { "_id": id },req.body,
        {
            $currentDate: { lastModified: true }
        }
        ,function (err,result){
            if(err){
                res.send("hello");
            }
            console.log("Data has been edited");
        }
    );
};

const apiServices = require('../controllers/todoControllers');



var router = function (app){

    app.route('/')
        .get(apiServices.initialPage);


    app.route('/todos')
        .get(apiServices.getAllTodoLists)
        .post(apiServices.insertTodo);


    app.route('/todos/:todoId')
        .get(apiServices.getTodoListById)
        .put(apiServices.editTodo)
        .delete(apiServices.deleteTodo);


 }


module.exports= router;

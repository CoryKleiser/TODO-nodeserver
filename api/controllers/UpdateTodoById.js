'use strict';
const client = require('../helpers/es');
const monitor = require('../helpers/monitor');


module.exports = {
    UpdateTodoById : UpdateTodoById
};

function UpdateTodoById(req, res){
    let start = monitor();
    client.update({
        index: 'todo',
        type: 'todo',
        id: req.swagger.params.id.value,
        body: {
            doc: req.swagger.params.id.update_todo.value
        }
    }, function (error, response) {
        res.header('Content-Type', 'application/json');
        if(error){
            res.statusCode = 400;
            res.end(JSON.stringify(error));
        } else {
            res.end();
            monitor(start, 'UpdateTodoById')
        }
    })
}
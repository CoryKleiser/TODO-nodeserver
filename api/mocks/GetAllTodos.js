'use strict';

module.exports = {
  GetAllTodos : GetAllTodos
}

function GetAllTodos(req, res, next){
  res.json([
    {
      todo_id: 0,
      todo: "Get Milk",
      datecreated: "2016-12-06T21:29:21.770Z",
      author: "Aidan",
      duedate: "2016-12-12T21:29:21.770Z",
      tags: ["Dairy"],
      completed: false
    },
    {
      todo_id: 1,
      todo: "Get Eggs",
      datecreated: "2016-12-04T21:29:21.770Z",
      author: "Aidan",
      duedate: "2016-12-12T21:29:21.770Z",
      tags: ["Other"],
      completed: false
    }
  ]);
}

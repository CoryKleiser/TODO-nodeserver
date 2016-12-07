'use strict';
const client = require('../helpers/es');
const monitor = require('../helpers/monitor');

module.exports = {
  GetAllTodos : GetAllTodos
};

function GetAllTodos(req, res) {
  let start = monitor();
  client.search({
    index:'todo',
    type: 'todo',
    q: '*',
    _sourceInclude: 'todo_id, todo, completed, tags, author, datecreated, duedate'
  }, function(error, response){
    if(error){
      res.end(JSON.stringify(error));
    } else {
      const results = response.hits.hits.map(function(hit){ return hit._source});
      res.header('Content-Type', 'application/json');
      res.end(JSON.stringify(results));
      monitor(start, 'GetAllTodos');
    }
  })
}

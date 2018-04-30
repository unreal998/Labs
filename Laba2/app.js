var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var tasks = [];
app.use(bodyParser.json());

app.get('/tasks', function(req, res){
  res.send(tasks);
});

// app.get('/tasks/:id', function(req, res){
// 	res.send(
// 		'Вы хотите получить задачу с Id='+
// 		req.params.id +
// 		'но сегодня задач нет');
// });

app.post('/tasks', function(req, res) {
	tasks.push(req.body);
	res.send('');
});

//res.sendStatus(201);
//res.send({ name: 'Quests'});
app.use('/', express.static(__dirname + '/static'));

// var NameTasks = [ 
//  app.get('/tasks/:id',function(req,res){
//  res.send('/tasks');
//  req.body.tasks
// })
// ];
app.listen(3000);
	

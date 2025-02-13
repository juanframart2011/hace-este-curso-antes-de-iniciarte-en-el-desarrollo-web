var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var tareas = [{
    _id: 1,
    title: 'Tarea 1',
    completed: false
}, {
    _id: 2,
    title: 'Tarea 2',
    completed: false
}, {
    _id: 3,
    title: 'Tarea 3',
    completed: false
}];

app.get('/tareas', function(req, res) {
    res.status(200).json(tareas);
});

app.post('/tareas', function(req, res) {
    let nuevaTarea = req.body;
    nuevaTarea._id = tareas.length + 1;
    tareas.push(nuevaTarea);
    res.status(200).json(nuevaTarea);
});

app.listen(3000, function() {
    console.log('El server esta funcionando en el puerto 3000');
});
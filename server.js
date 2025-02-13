var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.status(200).json([{
        key: 'value'
    }]);
});

app.listen(3000, function() {
    console.log('El server esta funcionando en el puerto 3000');
});
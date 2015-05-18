/**
 * Created by Ré on 18-5-2015.
 */

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8081);

io.on('connection', function (socket) {
    console.log('Connection!');
   socket.on('startup', function (data) {
       console.log(data);
   });
});

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, function() { console.log('listening on *:3000'); });

app.get('/', function(req, res) { res.sendFile(__dirname + '/index.html'); });

io.on('connection', function(socket) {
  socket.emit('news', {hello: 'world'});
  console.log('a user connected');
  socket.on('chat message', function(msg) { io.emit('chat message', msg); });
});

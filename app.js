const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server);

const LISTEN_PORT = 8080;

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/score', function(req,res) {
    res.sendFile(__dirname + '/public/score.html');
});

app.get('/controller', function(req,res) {
    res.sendFile(__dirname + '/public/controller.html');
});

//websocket stuff
socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
    });

    //custom events
    //socket = one client
    //socketIO.sockets = all clients
    socket.on('1-1', function(data) {
        console.log('Player ' + socket.id + ' has selected box 1-1.');
    });
    socket.on('1-2', function(data) {
        console.log('Player ' + socket.id + ' has selected box 1-2.');
    });
    socket.on('1-3', function(data) {
        console.log('Player ' + socket.id + ' has selected box 1-3.');
    });

    socket.on('2-1', function(data) {
        console.log('Player ' + socket.id + ' has selected box 2-1.');
    });
    socket.on('2-3', function(data) {
        console.log('Player ' + socket.id + ' has selected box 2-3.');
    });

    socket.on('3-1', function(data) {
        console.log('Player ' + socket.id + ' has selected box 3-1.');
    });
    socket.on('3-2', function(data) {
        console.log('Player ' + socket.id + ' has selected box 3-2.');
    });
    socket.on('3-3', function(data) {
        console.log('Player ' + socket.id + ' has selected box 3-3.');
    });

    socket.on('win', function(data) {
        console.log('Player ' + socket.id + ' has won! Final score: ' + score + ".");
    });
});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);
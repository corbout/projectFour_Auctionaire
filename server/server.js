var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express()

var server = require('http').Server(app);
var io = require('socket.io')(server)

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'server')));

app.use('/', routes);

server.listen(3000);

var id = 2
io.on('connection', function (socket) {
    socket.emit('chat', { id: 1, user:"admin", msg: "Welcome to the React chat room" })

    socket.on('chat', function (chat) {
        chat.id = id
        id++
        io.emit('chat', chat)
    })
})

module.exports = app;
var express = require('express');
var app = express();

//import the socket.io library
const io = require('socket.io')();

const port = process.env.PORT || 3030;

// tell express where our static files are (js, images, css etc)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const server = app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});

//this is all our socket.io messaging functionality

//attach socket.io
io.attach(server);

io.on('connecion', function(socket) {
    console.log('user connected');
    socket.emit('connected', {sID: `$(socket.id)`, message: 'new connection'});

    socket.on('diconnect', function() {
        console.log('a user disconnected');

        
    })
})
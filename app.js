const express = require('express');
const socketio = require('socket.io');

const PORT = process.env.PORT || 3050;

const app = express();
const server = app.listen(PORT, () => console.log('Server running : ' + PORT));


const io = socketio(server);

io.on('connection', (socket) => {
    console.log('Use Connected');
    socket.on('msg',data=>{
        console.log('data');
    })
 });
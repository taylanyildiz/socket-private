const express = require('express');
const socketio = require('socket.io');

const PORT = process.env.PORT || 3050;

const app = express();
app.get('/',(req,res)=>{
    res.status.json({name:'Taylan'});
});
const server = app.listen(PORT, () => console.log('Server running : ' + PORT));


const io = socketio(server);

io.on('connection', (socket) => {
    console.log('Use Connected');
    socket.on('msg',data=>{
        console.log('data');
    })
 });

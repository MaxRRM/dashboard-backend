const socketIO = require('socket.io');
const socket = {};

function connect(server) {
  socket.io = socketIO(server);
  socket.io.on('connection', (socket) => {
    console.log('new connection', socket.id);

    // socket.emit('server:data', data);

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

  })

}

function turnOn(data) {
  socket.io.emit('server:data', data)
}


module.exports = {
  connect,
  turnOn,
  socket
}

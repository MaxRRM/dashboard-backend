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

function turnOnPulse(pulse) {
  socket.io.emit('server:data:pulse', pulse)
}

function turnOnGsr(gsr) {
  socket.io.emit('server:data:gsr', gsr)
}


module.exports = {
  connect,
  turnOnPulse,
  turnOnGsr,
  socket
}

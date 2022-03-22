const io = require('socket.io')(undefined, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

module.exports = io;

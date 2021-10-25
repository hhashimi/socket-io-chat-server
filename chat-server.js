var io = require("./bin/www");

io.on("connection", (socket) => {
  // chat message from client
  socket.on("chat-message", (message) => {
    // emit to all sockets
    io.emit("server-message", message);
  });
});

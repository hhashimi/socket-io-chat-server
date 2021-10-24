var io = require("./bin/www");

io.on("connection", (socket) => {
  // chat message from client
  socket.on("chat-message", (message) => {
    // emit to all sockets
    io.emit("server-message", message);
  });

  io.emit("server-message", {
    text: "message from server",
    username: "Darth Vader",
  });
  io.emit("server-message", { text: "hello", username: "Han Solo" });
  io.emit("server-message", {
    text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    username: "Banana",
  });
});

var io = require("./bin/www");

let onlineUsersCount = 0;

io.on("connection", (socket) => {
  onlineUsersCount++;
  io.emit("online-users", onlineUsersCount);

  // join default room
  socket.on("join-channel", (channel) => {
    socket.join(channel);
  });

  // chat message from client
  socket.on("chat-message", (message) => {
    message.created = new Date().toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      year: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    // emit to all sockets in channel
    io.to(message.channel).emit("server-message", message);
  });

  socket.on("disconnect", () => {
    onlineUsersCount--;
    io.emit("online-users", onlineUsersCount);
  });
});

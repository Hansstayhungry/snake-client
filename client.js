const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  // send name to the server
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: HW');

    // // hard-coded message to test out
    // setTimeout(() => {
    //   conn.write('Move: up');
    //   }, 2000);

    // setTimeout(() => {
    //   conn.write('Move: right');
    //   }, 4000);
;  });

  conn.on("data", (data) => {
    console.log("Received data:", data);
  });

  conn.on("close", () => {
    console.log("Connection closed");
  });

  return conn;
};

module.exports = {
  connect
};
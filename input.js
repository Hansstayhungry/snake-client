// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //handleUserInput and register it as the "data" callback handler for stdin.

  const handleUserInput = function (data) {
    if (data === '\u0003') {
      process.exit();
    } else if (data === 'w') {
      connection.write("Move: up");
    } else if (data === 'a') {
      connection.write("Move: left");
    } else if (data === 's') {
      connection.write("Move: down");
    } else if (data === 'd') {
      connection.write("Move: right");
    };
  };

  stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = { setupInput };





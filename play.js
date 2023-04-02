const {connect} = require("./client");
const { setupInput } = require("./input");

const net = require("net");

console.log("Connecting ...");
connect();

setupInput();
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //handleUserInput and register it as the "data" callback handler for stdin.

  const handleUserInput = function (data) {
    if (data === 'p') {
      process.exit();
    } else if (data === 'w') {
      connect.write('Move: up');
    } else if (data === 's') {
      connect.write('Move: down');
    } else if (data === 'a') {
      connect.write('Move: left');
    } else if (data === 'd') {
      connect.write('Move: right');
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

//call setupInput
setupInput();

module.exports = {
  setupInput
};




const {connect} = require("./client");

const net = require("net");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //handleUserInput and register it as the "data" callback handler for stdin.
  const handleUserInput = function (data) {
  };
  
  stdin.on("data", handleUserInput);

  return stdin;




};





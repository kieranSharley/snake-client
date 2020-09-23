const { stdin } = require("process");

// Stores the active TCP connection object.
let connection;

const handleUserInput = function(data) {
  if (data === "w") {
    connection.write("Move: up");
  }
  if (data === "s") {
    connection.write("Move: down");
  }
  if (data === "a") {
    connection.write("Move: left");
  }
  if (data === "d") {
    connection.write("Move: right");
  }
  if (data === '\u0003') {
    process.exit();
  }
};

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;

  //listening to some input from terminal
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
    
  stdin.on(`data`, handleUserInput);

  return stdin;
};

module.exports = {setupInput};
//module.exports = {connection}
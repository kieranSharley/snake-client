const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  //Update the connect function to also attach an event handler to handle incoming data and console log it for the player.
  conn.on (`data`, (data) => {
    console.log(`Incoming:`, data);
  })  
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = connect
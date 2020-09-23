const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.on (`data`, (data) => {
    console.log(`Incoming:`, data);
  })
  conn.setEncoding('utf8'); 

  return conn;
}

console.log('Connecting ...');
connect();
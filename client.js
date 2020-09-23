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
  conn.setEncoding('utf8'); 

  //Update the connect function to also attach an event handler to handle incoming data and console log it for the player.
  conn.on (`data`, (data) => {
    console.log(`Incoming:`, data);
  })  
  conn.on(`connect`, () => {
    // setTimeout(() => {
    //   conn.write("Move: up")
    //   }, 1000)
    //   setInterval(function(){
    //      conn.write("Move: left"); 
    //     }, 50);

    console.log('Successfully connected to game server');
    ;
  });
  // conn.on(`connect`, () => {
  //   conn.write("Move: up");
  // });
  

  return conn;
}

module.exports = connect
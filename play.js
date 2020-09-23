const {connect}  = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let conn = connect();
setupInput(conn);


// Update play.js to send the connection object returned from connect()
//  into our setupInput() function.

// Our input module can now use the connection
// variable to send movement commands/messages to the server.



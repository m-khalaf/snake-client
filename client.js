const net = require("net");
const { host, port, name } = require("./constants");

// establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    host,
    port,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler to log a message once successfully connected to the server  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${name}`); //send name to server
    //conn.write("Move: up"); //ask the server to move the snake block up
  });

  // event handler to console data coming from the server 
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });


  return conn;
}

module.exports = connect;
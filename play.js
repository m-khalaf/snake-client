const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // event handler to console data coming from the server 
  conn.on("data", (data) => {
    console.log("Server says: ", data)
  });
  return conn;
}

console.log("Conecting ...");
connect();
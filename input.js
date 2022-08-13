let connection;
const {movements} = require("./constants");

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;

  stdin.on("data", handleUserInput);//calls function when ever it receives input from user
  return stdin;
};
//checks if moves entered by user matches the ones in constant file and if so it sends it to server
const handleUserInput = function(input) {
  if (input === '\u0003') {
    process.exit();
  }
  for (const move in movements) {
    if (input === move) {
      connection.write(movements[move]);
    }
  }


};




module.exports = setupInput;
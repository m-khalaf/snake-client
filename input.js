let connection;
const{movements}=require("./constants");

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;

  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (input) {
  if (input === '\u0003') {
    process.exit();
  };
  for (const move in movements){
    if (input ===move){
      connection.write(movements[move]);
    };
  };


};




module.exports = setupInput;
const host = "localhost";
const port = 50541;
const name = 'MK';
const movements = { //Create constants for movements and special messages
  w:"Move: up",
  a:"Move: left",
  s:"Move: down",
  d:"Move: right",
  g:"Say: nice cut my G",
};

module.exports = {
  host,
  port,
  name,
  movements,
};
const response = require('./response.json'); // loads the JSON file
const searchUsername = "ryan.louis@home.com";

const isTaken = response.Resources.some(
  user => user.userName === searchUsername
);

console.log(isTaken ? "Username is taken ❌" : "Username is available ✅");
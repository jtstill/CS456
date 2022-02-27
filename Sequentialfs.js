const fs = require("fs"); // import the file system module; usually same name for understandability

console.log("Initializing..."); // Code 1

let content = fs.readFileSync("node.txt"); // IO code

console.log(content.toString()); // Code 2 - IO

console.log("Finished."); // Code 3
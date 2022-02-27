const http = require('http'); // importing the http module
const fs = require("fs"); // file system module


const server = http.createServer( // creates the server
    function(request, response){
        let content = fs.readFileSync("09_bootstrap.html");

        response.writeHead(200,{'Content-type':'text/html'}); // optional
        response.write(content.toString()); // content of file
        response.write("<h1> New Content </h1>");
        response.end(); // optional
});

server.listen(4000,'localhost'); // runs the server
console.log('Server running in 4000'); // will be in the terminal, not in the browser now that the server is running

// Synchronous Read
/*
const fs = require("fs"); // import the file system module; usually same name for understandability

console.log("Performing read..."); // Code 1
let content = fs.readFileSync("09_bootstrap.html"); // IO code
console.log(content.toString()); // Code 2 - IO
console.log("Finished."); // Code 3
*/

// Asynchronous Read
/*
const fs = require("fs");

console.log("Initializing..."); // Code 1
fs.readFile("09_bootstrap.html", //IO
                function(err,content){ // callback
    if(err) console.log(err);
    else console.log(content.toString()); // Code 2 - IO
});
console.log("Finished."); // Code 3
*/
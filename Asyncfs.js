const fs = require("fs"); // import the file system module; usually same name for understandability

console.log("Initializing..."); // Code 1

fs.readFile("node.txt", //IO
                function(err,content){ // callback
    if(err) console.log(err);
    else console.log(content.toString()); // Code 2 - IO
});

console.log("Finished."); // Code 3
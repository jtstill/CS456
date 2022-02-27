const fs = require("fs").promises; // .promises is for the aysnc keyword

//const myReadFile = async function(){
async function myReadFile(){
    console.log("Initializing..."); // Code 1

    let content = await fs.readFile("node.txt"); // IO

    console.log(content.toString()); // Code 2

    console.log("Finished."); // Code 3
}

myReadFile();
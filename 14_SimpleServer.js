const http = require('http'); //importing the http module

// If you are importing a local file, you must use a local path like require('./my_js_file'); 


const server = http.createServer( // creates the server
    function(request, response){
        response.writeHead(200,{'Content-type':'text/html'}); // optional
        response.write('<h1>Hello World</h1>');
        response.end(); // optional
});

server.listen(4000,'localhost'); // runs the server
console.log('Server running in 4000'); // will be in the terminal, not in the browser now that the server is running
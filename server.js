const http = require('http');

const port = 8081;

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Tyoe': 'text/html' });
    response.write("<h1>Hello, This is from my server</h1>");
    response.end();

}).listen(port, () => {
    console.log(`Nodejs server started on port ${port}`)
})

// http://localhost:8081

//we can create a shortcut for typing node server.js in package.json in script tag.

//now we create shortcut which is node start/ npm start for node server.js
// If we use a default name start then use npm start
// If u give any name like "runThis" to start --> then u have to say npm run runThis

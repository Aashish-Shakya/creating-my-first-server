const http = require('http');

const port = 8081;

http
    .createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'text/html' }); // this line use send success msg by using 200 
        // response.write("<h1>Hello All, This is from my server</h1>");
        response.write(html);

        response.end();

    }).listen(port, () => {
        console.log(`Nodejs server started on port ${port}`)
    })

// http://localhost:8081

//we can create a shortcut for typing node server.js in package.json in script tag.

//now we create shortcut which is node start/ npm start for node server.js
// "start": "node server.js",
// If we use a default name start then use npm start
// If u give any name like "runThis" to start --> then u have to say npm run runThis



//---> Now we are going to install nodemeon to refresh ur server/web page again angain.
//command --> npm i nodemon

//Now we are creating a command in json to restart our server agin and again
//  "dev": "nodemon server.js"


const html = "<h1>Hello All, This is from my server</h1><h2> This is just a simple server which i created</h2>"
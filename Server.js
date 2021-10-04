const http = require('http');
const fs=require('fs');
const prompt = require('prompt-sync')({sigint: true});

function Serve(port,html){
    const requestListener = function (req, res) {
      res.writeHead(200);
      res.end(fs.readFileSync('index.html','utf-8'));
    }
    
    const server = http.createServer(requestListener);
    server.listen(port);

    console.log(`Listening at port: ${port}`)
}

const port=prompt("localhost prompt:");
const html=prompt("html:(index.html)")

Serve(port,html)


const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        return res.end('Welcome to home page');
    }
    if(req.url === '/about') {
        return res.end('Here is our short');
    }
    return res.end(`
    <h1> Oops! </h1>
    <p> can't find the page you are looking for</p> 
    <a href="/"> back home </a>
    `);

});

server.listen(5000,'0.0.0.0');
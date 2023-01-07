const http = require('http');
const api = require('./api');

const server = http.createServer(api);
const port = process.env.PORT || 3000 ;

server.listen(port, ()=>{
    console.log(`Server is up and running at port ${port}`);
})
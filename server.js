const http = require('http');
const api = require('./api');
const cors = require('cors');

api.use(cors({
    origin: "*" //allows the data to be fetched from anywhere. 
}))

const server = http.createServer(api);
const port = process.env.PORT || 3000 ;

server.listen(port, ()=>{
    console.log(`Server is up and running at port ${port}`)
});
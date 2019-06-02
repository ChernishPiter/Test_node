const express = require('express');
const server = express();

server.use('/', require('./user'));

server.listen(3000,()=>{
    console.log('Server start on port 3000');
});
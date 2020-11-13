const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const port = 5000;

app.get('/', (req, res) => {
 res.status(200).send(`Hello World! Our server is running at port ${port}`);
});

server.listen(port, () => {
 console.log(`Server running at port ${port}`);
});
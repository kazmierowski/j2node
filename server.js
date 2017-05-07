/**
 * Created by Kamil on 17.04.2017.
 */

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./server/routes/api');
const user = require('./server/routes/user');
const ticket = require('./server/routes/ticket');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// todo: CORS domain - to be removed on live
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set our api routes
app.use('/api', api);
app.use('/user', user);
app.use('/ticket', ticket);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
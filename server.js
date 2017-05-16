/**
 * Created by Kamil on 17.04.2017.
 */

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jwt-simple');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const api = require('./server/routes/api');
const user = require('./server/routes/user');
const ticket = require('./server/routes/ticket');
// const session = require('./server/db/db_session');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

// Session
app.set('jwtTokenSecret', 'loki');

app.use(session({
    key: 'session',
    secret: 'loki',
    store: new MySQLStore({
        host: 'j2node.com',
        user: 'jnodecom_j2',
        password: 'j2nodecom',
        database: 'jnodecom_db',
        schema: {
            tableName: 'session_tab'
        }
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000,
        secure: false,
        httpOnly: false
    }
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// todo: CORS domain - to be removed on live
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(function(req, res, next) {

    if(req.session.userName) {
        console.log(req.sessionID);
    } else {
        console.log('no session')
    }
    next();
});

// app.use(function (req, res, next) {
//     if (req.cookies.usr) {
//         session.check(req.cookies.usr, function (check) {
//             if (check) {
//                 next();
//             } else {
//                 // todo: check if this next() is ok in here... or maybe callback ?
//                 session.remove(jwt.decode(req.cookies.usr, app.get('jwtTokenSecret')).iss);
//                 next();
//             }
//         })
//     } else {
//         next();
//     }
// });

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

exports.app = app;
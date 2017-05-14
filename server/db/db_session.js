/**
 * Created by kamil on 14/05/17.
 */

const express = require('express');
const connect = require('./../db/db_connect');
const server = require('./../../server');
const router = express.Router();
const jwt = require('jwt-simple');
const moment = require('moment');
const userService = require('./user');

let saveSession = (token, userLogin) => {
    let connection = connect.createConnection();

    connection.query('CALL saveSession("' + token + '", "' + userLogin + '")');

    connection.end();
};

let removeSession = (userLogin) => {
    let connection = connect.createConnection();

    connection.query('UPDATE user_tab SET user_sessionId = null WHERE user_login = "' + userLogin + '"');

    connection.end();
};

let checkSession = (token, callback) => {

    let iss = jwt.decode(token, server.app.get('jwtTokenSecret')).iss;

    userService.getToken(iss, function(serverToken) {
        callback(serverToken === token);
    });
};

exports.check = checkSession;
exports.save = saveSession;
exports.remove = removeSession;
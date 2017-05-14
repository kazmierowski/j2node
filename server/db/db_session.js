/**
 * Created by kamil on 14/05/17.
 */

const express = require('express');
const connect = require('./../db/db_connect');
const router = express.Router();
const jwt = require('jwt-simple');
const moment = require('moment');

let saveSession = (userLogin, token) => {
    let connection = connect.createConnection();

    connection.query('CALL saveSession(' + token + ', ' + userLogin + ')');
};
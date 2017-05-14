/**
 * Created by kkazmierowski on 30/04/17.
 */

"use strict";

const express = require('express');
const connect = require('./../db/db_connect');
const router = express.Router();
const jwt = require('jwt-simple');
const moment = require('moment');

router.get('/allUsers', (req, res) => {

    let connection = connect.createConnection();

    connection.query('select * FROM user_tab', function (e, rows, fields) {
        if (e) throw e;
        res.send(rows);
    });

    connection.end();
});

router.get('/getUser/:id', (req, res) => {

    let connection = connect.createConnection();

    connection.query('select * FROM user_tab WHERE user_id = ' + req.params.id, function (e, rows, fields) {
        if (e) throw e;
        res.send(rows);
    });
});

router.get('/deleteUserType/:id', (req, res) => {

    let connection = connect.createConnection();

    connection.query('DELETE FROM userType_tab WHERE userType_id = ' + req.params.id, function (e, rows, fields) {
        if (e) throw e;
        res.send(true);
    });

    connection.end();
});

router.post('/auth', (req, res) => {
    let connection = connect.createConnection();

    connection.query("select checkUser('" + req.body.name + "','" + req.body.pass + "') as answer", function (e, rows, fields) {
        if (e) throw e;

        if (rows[0].answer === '1') {
            let expires = 1000 * 60 * 15; // 15 minutes
            let token = jwt.encode({
                iss: req.body.name,
                exp: expires
            }, req.app.get('jwtTokenSecret'));

            let options = {
                maxAge: expires
            };

            res.cookie('usr', token, options);
            res.send(true);

        } else if (rows[0].answer === '0') {
            res.send(JSON.stringify(false));
        } else {
        //    todo: add function to log events like this
        }
    });

    connection.end();
});

module.exports = router;
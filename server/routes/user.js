/**
 * Created by kkazmierowski on 30/04/17.
 */

"use strict";

const express = require('express');
const connect = require('./../db/db_connect');
const router = express.Router();
const jwt = require('jwt-simple');
const moment = require('moment');
const session = require('express-session');

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
    let connection2 = connect.createConnection();

    connection.query("select checkUser('" + req.body.name + "','" + req.body.pass + "') as answer", function (e, rows, fields) {
        if (e) throw e;

        else if (rows[0].answer === '1') {
            req.session.userName = req.body.name;
            req.session.save(function() {

                res.send(true);
            });


        } else if (rows[0].answer === '0') {
            res.send(false);
        } else {
            // todo: add function to log events like this
        }
    });

    connection.end();
});

module.exports = router;
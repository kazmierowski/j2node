/**
 * Created by kkazmierowski on 30/04/17.
 */

"use strict";

const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const moment = require('moment');
const session = require('express-session');

const user = require('../db/db_user');
const connect = require('./../db/db_connect');

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

    connection.query("CALL checkUser('" + req.body.email + "','" + req.body.pass + "')", function (e, rows, fields) {

        if (e) throw e;

        else if (rows[0][0].user_id !== 0) {
            req.session.userEmail = req.body.email;
            req.session.userId = req.body.email;
            req.session.save(function () {

                user.saveSessionId(req.sessionID, rows[0][0].user_id, function() {
                    res.send(rows[0]);
                });
            });

        } else if (rows[0][0].user_id === 0) {
            res.send(false);
        } else {
            // todo: add function to log events like this
        }
    });

    connection.end();
});

router.get('/userProjectsInfo/:userId', (req, res) => {
    let connection = connect.createConnection();

    connection.query('SELECT project_id, project_name FROM userToProject_mix ' +
        'JOIN project_tab ON project_id = userToProject_projectId AND userToProject_userId = "' + req.params.userId + '"',
        function(e, rows, fields) {
            if(e) {return}
            else {
                res.send(rows);
            }
        });

    connection.end();
});

router.get('/userFrontendData/:userId', (req, res) => {
    let connection = connect.createConnection();


    connection.query('CALL getUserFrontend("' + req.params.userId + '")',
        function(e, rows, fields) {
            if(e) {return}
            else {
                res.send(rows[0][0]);
            }
        });

    connection.end();
});

module.exports = router;
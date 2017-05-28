/**
 * Created by kamil on 14/05/17.
 */

const express = require('express');
const connect = require('./../db/db_connect');

let getToken = (userLogin, callback) => {
    let connection = connect.createConnection();

    connection.query('SELECT getUserToken("' + userLogin + '") AS token;', function(e, rows, field) {
        if(e) {return}
        else {
            callback(rows[0].token);
        }
    });

    connection.end();
};

let saveSessionId = (sessionId, userId, callback) => {
    let connection = connect.createConnection();

    connection.query('CALL saveSessionId("' + sessionId + '", "' + userId + '")');

    connection.end();

    callback();
};

let getUserSessionId = (userEmail, callback) => {
    let connection = connect.createConnection();

    connection.query('SELECT getUserSessionId("' + userEmail + '") AS sessionId', function(e, rows, field) {
        callback(rows[0].sessionId);
    });

    connection.end();
};

let getCompleteFrontendData = (userId, callback) => {
    let _data = {};

    getUser(userId, function(user) {
        _data.user = user;

        getUserProjects(userId, function(projects) {
            _data.projects = projects;

            getUserBoards(userId, function(boards) {
                _data.boards = boards;
                callback(_data);
            })
        })
    })
};

let getUser = (userId, callback) => {
    let connection = connect.createConnection();

    connection.query('CALL getUserFrontend("' + userId + '")', function (e, rows, fields) {
        callback(rows[0][0]);
    });

    connection.end()
};

let getUserProjects = (userId, callback) => {
    let connection = connect.createConnection();


    connection.query('CALL getUserProjectsFrontend("' + userId + '")', function (e, rows, fields) {
        console.log(rows[0]);
        callback(rows[0]);
    });

    connection.end();
};

let getUserBoards = (userId, callback) => {
    let connection = connect.createConnection();


    connection.query('CALL getUserBoardsFrontend("' + userId + '")', function (e, rows, fields) {
        callback(rows[0]);
    });

    connection.end();
};

exports.getToken = getToken;
exports.saveSessionId = saveSessionId;
exports.getUserSessionId = getUserSessionId;
exports.getCompleteFrontendData = getCompleteFrontendData;
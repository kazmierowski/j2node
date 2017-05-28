/**
 * Created by kamil on 28/05/17.
 */

const express = require('express');
const connect = require('./../db/db_connect');

let getFrontendData = (boardId, callback) => {

    let _data = {};

    getBoard(boardId, (board) => {
        _data.board = board;

        getBoardStatuses(boardId, (statuses) => {
            _data.statuses = statuses;
            callback(_data);
        })
    })
};

let getBoard = (boardId, callback) => {

    let connection = connect.createConnection();

    connection.query('CALL ', (e, rows, fields) => {
        callback(rows[0][0]);
    });

    connection.end();
};

let getBoardStatuses = (boardId, callback) => {

    let connection = connect.createConnection();

    connection.query('CALL getUserBoardFrontend("' + boardId + '")', (e, rows, fields) => {
        callback(rows[0][0]);
    });

    connection.end();
};

exports.getFrontendData = getFrontendData;
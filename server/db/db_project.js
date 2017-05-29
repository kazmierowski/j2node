/**
 * Created by kamil on 20/05/17.
 */

const express = require('express');
const connect = require('./../db/db_connect');

let getFullFrontentData = (projectId, callback) => {
    let _data = {};

    getTickets(projectId, (tickets) => {
        _data.tickets = tickets;
        getAllBoardsId(projectId, (boardsId) => {
            _data.boardsId = boardsId;
            getStatuses(projectId, (statuses) => {
                _data.statuses = statuses;
                callback(_data);
            })
        })
    })
};

let getAllBoardsId = (projectId, callback) => {
    let connection = connect.createConnection();

    connection.query('SELECT boardToProject_boardId as boardId ' +
        'FROM boardToProject_mix WHERE boardToProject_projectId = ' + projectId, (e, rows, fields) => {

        if(e) {return e}
        else {
            callback(rows);
        }
    } )
};

let getTickets = (projectId, callback) => {
    let connection = connect.createConnection();

    connection.query('CALL getProjectTickets("' + projectId + '")', (e, rows, fields) => {
        callback(rows[0]);
    });

    connection.end();
};

let getStatuses = (boardId, callback) => {

    let connection = connect.createConnection();

    connection.query('CALL getUserProjectStatuses("' + boardId + '")', (e, rows, fields) => {
        callback(rows[0]);
    });

    connection.end();
};

exports.getFullFrontentData = getFullFrontentData;
/**
 * Created by kamil on 20/05/17.
 */

const express = require('express');
const connect = require('./../db/db_connect');

let getFrontentData = (projectId, callback) => {
    let _data = {};

    getTickets(projectId, (tickets) => {
        _data.tickets = tickets;
        callback();
    })
};

let getTickets = (projectId, callback) => {
    let connection = connect.createConnection();

    connection.query('CALL getProjectTickets("' + projectId + '")', (e, rows, fields) => {
        callback(rows[0][0]);
    });

    connection.end();
};

exports.getFrontentData = getFrontentData;
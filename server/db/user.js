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
};

exports.getToken = getToken;
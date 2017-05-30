/**
 * Created by kkazmierowski on 30/04/17.
 */

"use strict";

console.log('db_connect module initialized');

const mysql = require('mysql');

function createConnection(){
    let connection = mysql.createConnection({
        host: 'j2node.com',
        user: 'jnodecom_j2',
        password: 'j2nodecom',
        database: 'jnodecom_db',
        debug: false
    });

    return connection;
}

exports.createConnection = createConnection;
exports.mysql = mysql;
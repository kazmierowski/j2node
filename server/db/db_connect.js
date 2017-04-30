/**
 * Created by kkazmierowski on 30/04/17.
 */
console.log('db_connect module initialized');

const mysql = require('mysql');

function createConnection(){
    let connection = mysql.createConnection({
        host: 'dev-live.co.uk',
        user: 'devlivec_j2node',
        password: 'j2node123',
        database: 'devlivec_j2node'
    });

    return connection;
}

exports.createConnection = createConnection;
exports.mysql = mysql;
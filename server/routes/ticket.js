/**
 * Created by kkazmierowski on 30/04/17.
 */

const express = require('express');
const connect = require('./../db/db_connect');
const router = express.Router();

router.get('/allTickets', (req, res, next) => {

    let connection = connect.createConnection();

    connection.query('select * FROM ticket_tab', function(e, rows, fields) {
        if(e) throw e;
        res.send(rows);
    });
    connection.end();
});

router.get('/getForColumn/:id', (req, res, next) => {

    let connection = connect.createConnection();

    connection.query('select * FROM ticket_tab', function(e, rows, fields) {
        if(e) throw e;
        res.send(rows);
    });
    connection.end();
});

module.exports = router;
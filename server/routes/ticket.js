/**
 * Created by kkazmierowski on 30/04/17.
 */

const express = require('express');
const connect = require('./../db/db_connect');
const router = express.Router();

router.get('/allTickets/:projectId', (req, res) => {

    let connection = connect.createConnection();

    connection.query('select * FROM user_tab', function(e, rows, fields) {
        if(e) throw e;
        res.send(rows);
    });

    connection.end();
});
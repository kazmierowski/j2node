/**
 * Created by Kamil on 17.04.2017.
 */

"use strict";

const express = require('express');
const connect = require('./../db/db_connect');
const router = express.Router();

router.get('/', (req, res) => {

    let connection = connect.createConnection();
    connection.query('select * FROM user_tab', function(e, rows, fields) {
        if(e) throw e;
        res.send(rows[0]);
    });
});

module.exports = router;
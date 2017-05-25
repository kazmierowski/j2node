/**
 * Created by kamil on 25/05/17.
 */

const express = require('express');
const router = express.Router();

const connect = require('./../db/db_connect');

router.get('/getFrontend/:projectId', (req, res) => {

    let connection = connect.createConnection();

    connection.query('CALL getUserProjectFrontend(' + req.params.projectId + ')', function(e, rows, fields) {

        if (e) throw e;

        else {
            res.send(rows[0]);
        }
    });

    connection.end();
});

module.exports = router;
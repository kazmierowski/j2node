/**
 * Created by Marek on 2017-04-30.
 */

const express = require('express');
const connect = require('./../db/db_connect');
const router = express.Router();

router.get('/login/:login/:password', (req, res) => {
    console.log('Weszło');
    let connection = connect.createConnection();

    connection.query('call checkUser('+ req.params.username +','+ req.params.password +') as answer', function(e, rows, fields) {
        if(e) throw e;
        console.log('RESPONSE');
        res.send(rows);
    });

    connection.end();
});

module.exports = router;
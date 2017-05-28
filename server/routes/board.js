/**
 * Created by kamil on 28/05/17.
 */

const express = require('express');
const router = express.Router();
const session = require('express-session');

const connect = require('./../db/db_connect');
const board = require('../db/db_board');

router.get('getFrontend/:boardId', (req, res) => {

    board.getFrontendData(req.params.boardId, (data) => {
        res.send(data);
    })
});

module.exports = router;
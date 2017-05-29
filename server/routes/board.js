/**
 * Created by kamil on 28/05/17.
 */

const express = require('express');
const router = express.Router();

const board = require('./../db/db_board');

router.get('/getFrontendData/:boardId', (req, res) => {

    board.getFrontendData(req.params.boardId, (data) => {
        res.send(data);
    })
});

module.exports = router;
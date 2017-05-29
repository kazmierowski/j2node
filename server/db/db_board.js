/**
 * Created by kamil on 28/05/17.
 */

const connect = require('./../db/db_connect');

let getFrontendData = (boardId, callback) => {

    let _data = {};

    getBoardStatusesId(boardId, (statuses) => {
        _data.statuses = statuses;
        callback(_data);
    })
};

let getBoardStatusesId = (boardId, callback) => {

    let connection = connect.createConnection();

    connection.query('SELECT ticketStatusToBoard_ticketStatusId as statusId ' +
        'FROM ticketStatusToBoard_mix WHERE ticketStatusToBoard_boardId = ' + boardId, (e, rows, fields) => {

        if (e) {
            console.log(e);
            return e
        }
        else {
            console.log(rows);
            callback(rows);
        }
    });

    connection.end();
};

exports.getFrontendData = getFrontendData;
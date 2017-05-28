/**
 * Created by kamil on 25/05/17.
 */

const express = require('express');
const router = express.Router();

const project = require('./../db/db_project');

router.get('/getFrontend/:projectId', (req, res) => {

    project.getFrontentData(req.params.projectId, (data) => {
        res.send(data);
    })

});

module.exports = router;
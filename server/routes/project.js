/**
 * Created by kamil on 25/05/17.
 */

const express = require('express');
const router = express.Router();

const project = require('./../db/db_project');

router.get('/getFullFrontend/:projectId', (req, res) => {

    project.getFullFrontentData(req.params.projectId, (data) => {
        res.send(data);
    })

});

module.exports = router;
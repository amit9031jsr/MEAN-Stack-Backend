const express = require('express');
var router = express.Router();

var { Employee } = require('../models/employee.js');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if(!err) {
            res.send(docs);
        }
        else {
            console.log('Error in Retrieving Employees:' + JSON.stringify(err, undefined, 2));
        }
    });
})

module.exports = router;
const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee.js');


// Create new employee
router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Employee Save: ' + JSON.stringify(err, undefined, 2));
        }
    });
});


// Retreive all employee details
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in Retrieving Employees: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

module.exports = router;
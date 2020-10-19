const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');    
/*  destructuring
const user = {id: 42, is_verified: true};
const {id, is_verified} = user; */

var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log('Server running at port 3000'));

app.get('/', (req, res) => {
    res.send('Home');
});

app.use('/employees', employeeController);
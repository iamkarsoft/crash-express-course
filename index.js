const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();



// init middleware
app.use(logger);

// creating routes

app.get('/api/members',(req,res)=> res.json(members));


// set static folder
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server Started on ${PORT}`));
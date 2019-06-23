const express = require('express');
const path = require('path');
const members = require('./Members');
const app = express();


// middleware
const logger = (req, res, next) =>{
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
}

// init middleware
app.use(logger);

// creating routes

app.get('/api/members',(req,res)=> res.json(members));


// set static folder
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server Started on ${PORT}`));
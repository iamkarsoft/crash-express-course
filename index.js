const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const app = express();



// init middleware
// app.use(logger);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// members api route
app.use('/api/members',require('./routes/api/members'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server Started on ${PORT}`));
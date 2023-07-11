const express = require('express');
const app = express();
const router = require("./routes/routes");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config({path: './config.env'});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.text({ type: 'text/html' }));
// const verifyUser = require("./middleware")
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
  });

//middleware
// app.use(verifyUser);

const PORT = process.env.PORT 
require('./DB/connect');
const User = require('./model/userSchema');

 

app.get('/', (req, res) => {
    res.send('Server is ON');
});

// middleware to set router
app.use(router);



app.listen(PORT,() =>{
    console.log(`Server is on ${PORT}`);
})
// requires
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;

// app
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

// mongoDB
mongoose.connect('mongodb://localhost:27017/dictionary', {useNewUrlParser: true},
// if statement function checking if there's a connection or error
function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log("connected")
    }
});

// port listening
app.listen(port, () => console.log(`App listening on port ${port}`));

module.exports = app;
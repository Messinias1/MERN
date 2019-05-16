// requires
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;

// app
const app = express()

app.listen(port, () => console.log(`App listening on port ${port}`));

module.exports = app;
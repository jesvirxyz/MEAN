const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const sampleRoute = require('./routes/index');
app.use('/', sampleRoute);

mongoose.connect('mongodb://localhost:27017/helloWorld', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to Database');
});

app.listen(3000, () => {
    console.log('Server Started');
});

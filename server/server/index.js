// Main starting point of the application

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
// bodyParser is another middleware that is used to parse incoming request
const morgan = require('morgan');
//morgan is a  logging framework, it is just about logging incoming request, we usually use to debugging
const app = express();
const router = require('./router');
const mongoose = require('mongoose'); //use to create model and schema
const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth')

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);

// Server Setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
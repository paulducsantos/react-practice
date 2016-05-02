var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
  console.log("Listening on: " + PORT)
});
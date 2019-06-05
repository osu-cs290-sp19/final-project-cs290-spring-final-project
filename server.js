var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var twitData = require('./twitData.json');
console.log("== twitData", twitData);

app.use(express.static('public'));
app.use(express.static('views'));

app.get(['/','/index.html'], function(req, res, next){
  res.status(200).render('box', {twits: twitData})
});

var twitNum = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7
]

app.get('/twits/:twitNum', function (req, res, next) {
  if(twitData[req.params.twitNum]) {
    res.status(200).render('box', {singleT: twitData[req.params.twitNum]})
  } else {
    next();
  }
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});

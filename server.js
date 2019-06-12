/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:Charles
 * Email:HILLCHAR@oregonstate.edu
 */
 const  twitData = require("./twitData");
 var path = require('path');
 var express = require('express');
 var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;



app.engine('handlebars',exphbs());
app.set('view engine','handlebars');
app.use(express.static('public'));

app.get('/', function (req, res){
  res.render('TwitPage', {
  Twit:twitData
});
});

app.get('/twit/:n', function (req, res){
   var n = req.params.n;

   if(n >= 0 && n <= 7){
var SingleTwit = [
  {
author:twitData[n].author,
text:twitData[n].text,
  }
];

  res.render('TwitPage', {
  Twit:SingleTwit
});
}
else
  res.status(404).render('404');
});


app.get('*',function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});

var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

var app = express();
var port = process.env.PORT || 3000;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoUrl = 'mongodb://localhost:27017'; //`mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('views'));

app.get(['/','index.html'], function(req, res, next){
    res.status(200).render('coverTemplate', {
      name: "Applicant",
      streetAddress: "Street Address",
      city: "City",
      state: "Oregon",
      zipCode: "97000",
      number: "971-000-0000",
      emailAddress: "email@address.com",
      date: "01/01/19",
      recipientName: "Recipient Name",
      recipientTitle: "CEO",
      companyName: "WebDev",
      recipientAddress: "Company Street Address",
      recipientCity: "Los Angeles",
      recipientState: "California",
      recipientZipCode: "97000",
      summary: "FillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerTextFillerText"
    });
  });

app.get('*', function (req, res) {
  res.status(404).render('404');
});

MongoClient.connect(mongoUrl,{ useNewUrlParser: true }, function (err, client) {

  if (err) {
    throw err;
  }

  db = client.db(mongoDBName);
  app.listen(3000, function () {
    console.log("== Server listening on port 3000");
  });
});

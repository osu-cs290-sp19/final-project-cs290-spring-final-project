var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config();

var app = express();
var port = process.env.PORT || 9999;

var mongoHost = process.env.MONGO_HOST || '127.0.0.1';
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME || 'something';

var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;

/*
if (fs.existsSync('.dev')) {
  mongoUrl = `mongodb://${mongoHost}:${mongoPort}/${mongoDBName}`;
}
*/

var db = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('views'));

app.get(['/','index.html'], function (req, res, next) {
    var collection = db.collection('people');
    res.status(200).render('home', { people: collection });
});

app.get('/person/:personID', function (req, res, next) {
  var personIDRequested = req.params.personID.toLowerCase();
  var collection = db.collection('people');
  collection.find({ personID: personIDRequested }).toArray(function (err,people) {
    if (err) {
      res.status(500).send({
        error: "Not a valid person"
      });
    } else if (people.length < 1) {
      next();
    } else {
      console.log("==Person Info: ", people);
      res.status(200).render('coverTemplate', people[0]);
    }
  });
});

app.post('/person/:personID/createresume', function (req, res, next) {
  if (req.body && req.personID && req.personName && req.streetAddress && req.city && req.state && req.zipCode && req.number && req.emailAddress && req.date && req.recipientName && req.recipientTitle && req.companyName && req.recipientAddress && req.recipientCity && req.recipientState && req.recipientZipCode && req.fontType && req.personalTextSize && req.orgTextSize && req.summaryTextSize && req.colorSelected && req.summaryText) {
      var collection = db.collection('people');
      collection.insertOne( {
        personID: req.personID,
        personName: req.personName,
        streetAddress: req.streetAddress,
        city: req.city,
        state: req.state,
        zipCode: req.zipCode,
        number: req.number,
        emailAddress: req.emailAddress,
        date: req.date,
        recipientName: req.recipientName,
        recipientTitle: req.recipientTitle,
        companyName: req.companyName,
        recipientAddress: req.recipientAddress,
        recipientCity: req.recipientCity,
        recipientState: req.recipientState,
        recipientZipCode: req.recipientZipCode,
        fontType: req.fontType,
        personalTextSize: req.personalTextSize,
        orgTextSize: req.orgTextSize,
        summaryTextSize: req.summaryTextSize,
        colorSelected: req.colorSelected,
        summaryText: req.summaryText
      });
    res.status(200).send("Information saved successfully");

  } else {
    res.status(500).send({
      error: "Information could not be sent to server"
    });
  }
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function (err, client) {
  if (err) {
    throw err;
  } else {
    db = client.db(mongoDBName);
    app.listen(port, function () {
      console.log("== Server is listening on port", port);
    });
  }
});

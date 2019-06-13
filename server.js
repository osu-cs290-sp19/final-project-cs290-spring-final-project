var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config()

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
    collection.find({}).toArray(function (err, peopleData) {
        if (err) {
          res.status(500).send( {
            error: "Error fetching this person's info"
          });
        } else {
          console.log("==All people: ", peopleData);
          res.status(200).render('home', { people : peopleData})
        }
    });
});



app.get('/people/:person', function (req, res, next) {
  var personIDRequested = req.params.person.toLowerCase();
  var collection = db.collection('people');
  collection.find({ personID: personIDRequested }).toArray(function (err, people) {
    if (err) {
      res.status(500).send({
        error: "Not a valid person"
      });
    } else if (people.length < 1) {
      next();
    } else {
      console.log("==Person Info: ", people[0]);
      res.status(200).render('coverTemplate', people[0]);
    }
  });
});


app.post('/createresume', function (req, res, next) {
  if (req.body) {

      console.log("Trying to store info, have all info");

      var collection = db.collection('people');
      
      collection.insertOne( {
        personID: req.body.personID,
        personName: req.body.personName,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        number: req.body.number,
        emailAddress: req.body.emailAddress,
        date: req.body.date,
        recipientName: req.body.recipientName,
        recipientTitle: req.body.recipientTitle,
        companyName: req.body.companyName,
        recipientAddress: req.body.recipientAddress,
        recipientCity: req.body.recipientCity,
        recipientState: req.body.recipientState,
        recipientZipCode: req.body.recipientZipCode,
        fontType: req.body.fontType,
        personalTextSize: req.body.personalTextSize,
        orgTextSize: req.body.orgTextSize,
        summaryTextSize: req.body.summaryTextSize,
        colorSelected: req.body.colorSelected,
        summaryText: req.body.summaryText
      });
    res.status(200).send("Information saved successfully");

  } else {
    console.log("==Couldn't store info");
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





/*

db.people.insertOne({
        personID: "temptest",
        personName: "temptest",
        streetAddress: "0000 Street Address",
        city: "City",
        state: "State",
        zipCode: "97200",
        number: "971-000-000",
        emailAddress: "tempemail@gmail.com",
        date: "01/01/2019",
        recipientName: "John Doe",
        recipientTitle: "CEO",
        companyName: "Company",
        recipientAddress: "1000 Street Address",
        recipientCity: "City",
        recipientState: "State",
        recipientZipCode: "97211",
        fontType: "helvetica",
        personalTextSize: "text-14",
        orgTextSize: "text-14",
        summaryTextSize: "text-12",
        colorSelected: "lightgrey",
        summaryText: "Filler Text Filler Text" });

*/

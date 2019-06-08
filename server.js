var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//var twitData = require('./twitData.json');
//console.log("== twitData", twitData);

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', function(req, res, next){
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
  //res.status(200).render('box', {twits: twitData})


// app.get('*', function (req, res) {
//   res.status(404).render('404');
// });

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});

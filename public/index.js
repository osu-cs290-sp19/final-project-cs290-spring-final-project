var getStartedButton = document.getElementById('create-resume-button');
var modals = document.getElementsByClassName('modal');
var closeButton = document.getElementsByClassName('exit-button');
var nextButton = document.getElementsByClassName('next-button');
var finishButton = document.getElementById('finish-button');

var personInfo = {
  personID: "",
  name: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  number: "",
  emailAddress: "",
  date: "",
  recipientName: "",
  recipientTitle: "",
  companyName: "",
  recipientAddress: "",
  recipientCity: "",
  recipientState: "",
  recipientZipCode: "",
  fontType: "",
  personalTextSize: "",
  orgTextSize: "",
  summaryTextSize: "",
  backgroundColor: "",
  summary: ""
}
    getStartedButton.addEventListener('click', function() {
        if(getStartedButton.value === "Get Started") {
            modals[0].classList.toggle('hidden');


        }
        //Open modal when 'Get Started' is clicked
    });

    nextButton[0].addEventListener('click', function() {
      var newPersonalTextSize = document.querySelector('input[name=personal-text-size]:checked');
      var newOrgTextSize = document.querySelector('input[name=org-text-size]:checked');
      var newSummaryTextSize = document.querySelector('input[name=summary-text-size]:checked');
      var newFontType = document.querySelector('input[name=font-type]:checked');
      var newBackgroundColor = document.querySelector('input[name=background-color-type]:checked');

      if ( (newPersonalTextSize) && (newOrgTextSize) && (newSummaryTextSize) && (newFontType) && (newBackgroundColor) ) {

          console.log("Made it through first modal")

          console.log("personalTextSize: ", personalTextSize.value);
          console.log("orgTextSize: ", orgTextSize.value);
          console.log("summaryTextSize: ", summaryTextSize.value);
          console.log("fontType: ", fontType.value);
          console.log("backgroundColor: ", backgroundColor.value);

          personInfo.personalTextSize = newPersonalTextSize.value;
          personInfo.orgTextSize = newOrgTextSize.value;
          personInfo.summaryTextSize = newSummaryTextSize.value;
          personInfo.fontType = newFontType.value;
          personInfo.backgroundColor = newBackgroundColor.value;

          /* do logic */
          modals[0].classList.toggle('hidden');
          modals[1].classList.toggle('hidden');

      } else {
        alert('Please fill out all values on this form');
      }
    });

    nextButton[1].addEventListener('click', function() {
        var newPersonNameInput = document.getElementById('person-name-input');
        var newPersonEmailInput = document.getElementById('person-email-address-input');
        var newPersonStreetInput = document.getElementById('person-street-address-input');
        var newPersonCityInput = document.getElementById('person-city-input');
        var newPersonStateInput = document.getElementById('person-state-input');
        var newPersonZipCodeInput = document.getElementById('person-zipcode-input');
        var newPersonNumberInput = document.getElementById('person-number-input');

        if ( (newPersonNameInput.value !== "") && (newPersonEmailInput.value !== "") && (newPersonStreetInput.value !== "") && (newPersonCityInput.value !== "") &&
           (newPersonStateInput.value !== "") && (newPersonZipCodeInput.value !== "") && (newPersonNameInput.value !== "") )  {

          console.log("Made it through second modal")

          console.log("newPersonNameInput: ", newPersonNameInput.value);
          console.log("newPersonEmailInput: ", newPersonEmailInput.value);
          console.log("newPersonStreetInput: ", newPersonStreetInput.value);
          console.log("newPersonCityInput: ", newPersonCityInput.value);
          console.log("newPersonStateInput: ", newPersonStateInput.value);
          console.log("newPersonZipCodeInput: ", newPersonZipCodeInput.value);
          console.log("newPersonNumberInput: ", newPersonNumberInput.value);

          personInfo.name = newPersonNameInput.value;
          personInfo.emailAddress = newPersonEmailInput.value;
          personInfo.streetAddress = newPersonStreetInput.value;
          personInfo.city = newPersonCityInput.value;
          personInfo.state = newPersonStateInput.value;
          personInfo.zipCode = newPersonZipCodeInput.value;
          personInfo.number = newPersonNumberInput.value;

          /* split the name and add to personID */
          var newPersonID = newPersonNameInput.value.split(' ');
          var fullPersonID = "";
          for (var c = 0; c < newPersonID.length; c++) {
            if (c === 0) {
              fullPersonID += newPersonID[c];
            } else {
              fullPersonID += "-"
              fullPersonID += newPersonID[c];
            }
          }
          personInfo.personID = fullPersonID;

          modals[1].classList.toggle('hidden');
          modals[2].classList.toggle('hidden');

        } else {
          alert('Please fill out all values on this form');
        }
    });

    nextButton[2].addEventListener('click', function() {
      var newDate = document.getElementById('date');
      var newRecipientNameInput = document.getElementById('recipient-name-input');
      var newRecipientTitleInput = document.getElementById('recipient-title-input');
      var newCompanyNameInput = document.getElementById('company-name-input');
      var newRecipientStreetInput = document.getElementById('recipient-street-address-input');
      var newRecipientCityInput = document.getElementById('recipient-city-input');
      var newRecipientStateInput = document.getElementById('recipient-state-input');
      var newRecipientZipCodeInput = document.getElementById('recipient-zipcode-input');

      if ( (newDate.value !== "") && (newRecipientNameInput.value !== "") && (newRecipientTitleInput.value !== "") && (newCompanyNameInput.value !== "") &&
         (newRecipientStreetInput.value !== "") && (newRecipientCityInput.value !== "") && (newRecipientStateInput.value !== "") && (newRecipientZipCodeInput.value !== "") ) {

          console.log("Made it through third modal");

          console.log("newDate: ", newDate.value);
          console.log("newRecipientNameInput: ", newRecipientNameInput.value);
          console.log("newRecipientTitleInput: ", newRecipientTitleInput.value);
          console.log("newCompanyNameInput", newCompanyNameInput.value);
          console.log("newRecipientStreetInput: ", newRecipientStreetInput.value);
          console.log("newRecipientCityInput: ", newRecipientCityInput.value);
          console.log("newRecipientStateInput:", newRecipientStateInput.value);
          console.log("newRecipientZipCodeInput", newRecipientZipCodeInput.value);

          personInfo.Date = newDate.value;
          personInfo.recipientName = newRecipientNameInput.value;
          personInfo.recipientTitle = newRecipientTitleInput.value;
          personInfo.companyName = newCompanyNameInput.value;
          personInfo.recipientStreet = newRecipientStreetInput.value;
          personInfo.recipientCity = newRecipientCityInput.value;
          personInfo.recipientState = newRecipientStateInput.value;
          personInfo.recipientZipCode = newRecipientZipCodeInput.value;

          modals[2].classList.toggle('hidden');
          modals[3].classList.toggle('hidden');

      } else {
          alert('Please fill out all values on this form');
      }
    });

    for (let b = 0; b < closeButton.length; b++) {
      closeButton[b].addEventListener('click', function () {
        for (let c = 0; c < modals.length; c++) {
          modals[c].classList.add('hidden');
        }
      });
    }

    finishButton.addEventListener('click', function () {
      var summaryInput = document.getElementById('summary-input');

      if (summaryInput.value !== "") {
        console.log("Made it through all the modals");

        console.log("summaryInput: ", summaryInput);

        personInfo.summary = summaryInput.value;

        /* send server request */
        var request = new XMLHttpRequest();
        request.open('POST', '/createresume');

        var requestBody = JSON.stringify(personInfo);
        console.log("==requestBody: ", requestBody);

        request.addEventListener('load', function(event) {

          if (event.target.status === 200) {
            var newDiv = document.createElement('div');
            var newA = document.createElement('a');
            newA.href = "/person/" + personInfo.personID;
            newA.textContent = personInfo.name;
            newDiv.appendChild(newA);
            var container = document.getElementsByTagName('main');
            container[0].appendChild(newDiv);
          }

          else {
            var message = event.target.response;
            alert("Error - User info could not be saved on server: " + message);
          }

          modals[3].classList.add('hidden');

          else {
            alert("Please fill out all values on this form");
          }   
      });
    }
  });

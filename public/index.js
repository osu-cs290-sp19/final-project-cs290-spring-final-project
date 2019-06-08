var getStartedButton = document.getElementById('create-resume-button');
var modals = document.getElementsByClassName('modal');
var closeButton = document.getElementsByClassName('exit-button');
var nextButton = document.getElementsByClassName('next-button');
var finishButton = document.getElementById('finish-button');




    getStartedButton.addEventListener('click', function() {
        //Open modal when 'Get Started' is clicked
        modals[0].classList.toggle('hidden');
    });

    /*
    window.addEventListener('click', function(event) {
        //Close modal if user clicks dark area outside form outline
       if (event.target === modal) {
           modal[0].classList.toggle('hidden');
       }
    });
    */
    nextButton[0].addEventListener('click', function() {
      var personalTextSize = document.querySelector('input[name=personal-text-size]:checked');
      var organizationTextSize = document.querySelector('input[name=org-text-size]:checked');
      var summaryTextSize = document.querySelector('input[name=summary-text-size]:checked');
      var lineSpacing = document.querySelector('input[name=line-spacing]:checked');
      var fontType = document.querySelector('input[name=font-type]:checked');


      if ( (personalTextSize) && (organizationTextSize) && (summaryTextSize) && (lineSpacing) && (fontType) ) {

          console.log("Made it through first modal")
          console.log("personalTextSize: ", personalTextSize.value);
          console.log("organizationTextSize: ", organizationTextSize.value);
          console.log("summaryTextSize: ", summaryTextSize.value);
          console.log("lineSpacing: ", lineSpacing.value);
          console.log("fontType: ", fontType.value);

          /* do logic */
          modals[0].classList.toggle('hidden');
          modals[1].classList.toggle('hidden');

      } else {
        alert('Please fill out all values on this form');
      }
    });


    nextButton[1].addEventListener('click', function() {
        var personNameInput = document.getElementById('person-name-input');
        var personEmailInput = document.getElementById('person-email-address-input');
        var personStreetInput = document.getElementById('person-street-address-input');
        var personCityInput = document.getElementById('person-city-input');
        var personStateInput = document.getElementById('person-state-input');
        var personZipCodeInput = document.getElementById('person-zipcode-input');
        var personNumberInput = document.getElementById('person-number-input');

        if ( (personNameInput.value !== "") && (personEmailInput.value !== "") && (personStreetInput.value !== "") && (personCityInput.value !== "") && (personStateInput.value !== "") && (personZipCodeInput.value !== "") && (personNameInput.value !="") )  {

          console.log("Made it through second modal")

          console.log("personNameInput: ", personNameInput.value);
          console.log("personEmailInput: ", personEmailInput.value);
          console.log("personStreetInput: ", personStreetInput.value);
          console.log("personCityInput: ", personCityInput.value);
          console.log("personStateInput: ", personStateInput.value);
          console.log("personZipCodeInput: ", personZipCodeInput.value);
          console.log("personNumberInput: ", personNumberInput.value);


          modals[1].classList.toggle('hidden');
          modals[2].classList.toggle('hidden');

        } else {
          alert('Please fill out all values on this form');
        }

    });

    nextButton[2].addEventListener('click', function() {
      var date = document.getElementById('date');
      var recipientNameInput = document.getElementById('recipient-name-input');
      var recipientTitleInput = document.getElementById('recipient-title-input');
      var companyNameInput = document.getElementById('company-name-input');
      var recipientStreetInput = document.getElementById('recipient-street-address-input');
      var recipientCityInput = document.getElementById('recipient-city-input');
      var recipientStateInput = document.getElementById('recipient-state-input');
      var recipientZipCodeInput = document.getElementById('recipient-zipcode-input');

      if ( (date.value !== "") && (recipientNameInput.value !== "") && (recipientTitleInput.value !== "") && (companyNameInput.value !== "") &&
         (recipientStreetInput.value !== "") && (recipientCityInput.value !== "") && (recipientStateInput.value !== "") && (recipientZipCodeInput.value !== "") ) {

           console.log("Made it through third modal");

           console.log("date: ", date.value);
           console.log("recipientNameInput: ", recipientNameInput.value);
           console.log("recipientTitleInput: ", recipientTitleInput.value);
           console.log("companyNameInput", companyNameInput.value);
           console.log("recipientStreetInput: ", recipientStreetInput.value);
           console.log("recipientCityInput: ", recipientCityInput.value);
           console.log("recipientStateInput:", recipientStateInput.value);
           console.log("recipientZipCodeInput", recipientZipCodeInput.value);









           modals[2].classList.toggle('hidden');
           modals[3].classList.toggle('hidden');
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
      }

      modals[3].classList.add('hidden');
      /* get all the inputs here and create the resume */
      



    });

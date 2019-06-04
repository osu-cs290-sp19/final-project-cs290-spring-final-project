var getStartedButton = document.getElementById('create-resume-button');
var modals = document.getElementsByClassName('modal');
var closeButton = document.getElementsByClassName('exit-button');
var nextButton = document.getElementsByClassName('next-button');
var finishButton = document.getElementById('finish-button');


var current_modal = 0;


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



    for (let a = 0; a < nextButton.length; a++) {
      nextButton[a].addEventListener('click', function () {
        console.log("Called next Button" + a);
        modals[current_modal].classList.toggle('hidden');
        current_modal += 1;
        modals[current_modal].classList.toggle('hidden');
      });
    };

    for (let b = 0; b < closeButton.length; b++) {
      closeButton[b].addEventListener('click', function () {
        for (let c = 0; c < modals.length; c++) {
          modals[c].classList.add('hidden');
        }
        current_modal = 0;
      });
    }

    finishButton.addEventListener('click', function () {
      modals[current_modal].classList.add('hidden');
      /* get all the inputs here and create the resume */



    });

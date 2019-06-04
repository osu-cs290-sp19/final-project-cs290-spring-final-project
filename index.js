var getStartedButton = document.getElementById('create-resume-button');
var modals = document.getElementsByClassName('modal');
var closeButton = document.getElementsByClassName('close-button');
var nextButton = document.getElementsByClassName('next-button');



    getStartedButton.addEventListener('click', function() {
        //Open modal when 'Get Started' is clicked
        modals[0].classList.remove('hidden');
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
      console.log(a);
      nextButton[a].addEventListener('click', function () {
        console.log("Called next Button");
        modals[a].classList.add('hidden');
        modals[a + 1].classList.toggle('hidden');
      });
    };

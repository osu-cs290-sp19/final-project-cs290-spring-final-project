var getStartedButton = document.getElementById("create-resume-button");
var modal = document.getElementById("modal");
var closeButton = document.getElementById("close-modal");

    getStartedButton.addEventListener('click', function() {
        //Open modal when 'Get Started' is clicked
        modal.style.display = 'block';
    });
    
    closeButton.addEventListener('click', function() {
        //Close modal when 'X' is clicked
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        //Close modal if user clicks dark area outside form outline
       if (event.target === modal) {
           modal.style.display = 'none';
       } 
    });



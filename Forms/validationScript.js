
var input = document.getElementById("inputField");
var form = document.getElementById("myForm");
form.addEventListener("submit", function(event){
    var value = input.value;
    var expressionPattern = /^[a-zA-Z0-9]+$/;
    if(!expressionPattern.test(value)){
      alert("Invalid, input must be alphanumeric value!")
      event.preventDefault();
    }else{
      alert("Input valid");
    }
})




// JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

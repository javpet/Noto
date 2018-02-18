document.addEventListener(
	"DOMContentLoaded",
	function() {
		// your code goes here

		// CONSTANTS
		var signUpForm = document.querySelector(".signup-form");
		var closeIcon = document.querySelector(".close-icon");

		// Bringing in the sign up form
		var fadeInSignUp = function() {
			signUpForm.classList.add("inside");
		};

		//Bringing out the sign up form
		var fadeOutSignUp = function() {
			signUpForm.classList.remove("inside");
		};

		closeIcon.addEventListener("click", fadeOutSignUp);

		setTimeout(fadeInSignUp, 3000);
	},
	false
);

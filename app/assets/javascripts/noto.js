document.addEventListener(
	"DOMContentLoaded",
	function() {
		// your code goes here

		// CONSTANTS
		const signUpForm = document.querySelector(".signup-form");
		const closeIcon = document.querySelector(".close-icon");

		// Bringing in the sign up form
		const fadeInSignUp = () => {
			signUpForm.classList.add("inside");
		};

		//Bringing out the sign up form
		const fadeOutSignUp = () => {
			signUpForm.classList.remove("inside");
		};

		closeIcon.addEventListener("click", fadeOutSignUp);

		setTimeout(fadeInSignUp, 3000);
	},
	false
);

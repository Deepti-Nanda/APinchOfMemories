// Check if the user is already logged in
if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "index.html";
}


// Get signup form and message
const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");


signupForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get values from the form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirm-password").value;


    // Check password length
    if (password.length < 6) {

        signupMessage.textContent =
            "Password must be at least 6 characters long.";

        signupMessage.className = "error-message";

        return;
    }


    // Check whether passwords match
    if (password !== confirmPassword) {

        signupMessage.textContent =
            "Passwords do not match.";

        signupMessage.className = "error-message";

        return;
    }


    // Check if an account already exists
    const existingUser = localStorage.getItem("recipeUser");

    if (existingUser) {

        const user = JSON.parse(existingUser);

        if (user.email === email) {

            signupMessage.textContent =
                "An account with this email already exists.";

            signupMessage.className = "error-message";

            return;
        }
    }


    // Create user object
    const user = {
        name: name,
        email: email,
        password: password
    };


    // Save user
    localStorage.setItem(
        "recipeUser",
        JSON.stringify(user)
    );


    // Show success message
    signupMessage.textContent =
        "Account created successfully! Redirecting to login...";

    signupMessage.className = "success-message";


    // Redirect to login
    setTimeout(function () {
        window.location.href = "login.html";
    }, 1500);

});
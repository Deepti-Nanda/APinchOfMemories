// Check if the user is already logged in
if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "index.html";
}


// Get login form and message
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");


loginForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get login details
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Get saved user
    const savedUser = localStorage.getItem("recipeUser");


    // Check if account exists
    if (!savedUser) {

        loginMessage.textContent =
            "No account found. Please sign up first.";

        loginMessage.className = "error-message";

        return;
    }


    // Convert stored JSON into an object
    const user = JSON.parse(savedUser);


    // Check email and password
    if (email !== user.email || password !== user.password) {

        loginMessage.textContent =
            "Incorrect email or password.";

        loginMessage.className = "error-message";

        return;
    }


    // Login successful
    loginMessage.textContent =
        "Login successful! Welcome back, " + user.name + "!";

    loginMessage.className = "success-message";


    // Save login status
    localStorage.setItem("isLoggedIn", "true");


    // Redirect to Home
    setTimeout(function () {
        window.location.href = "index.html";
    }, 1500);

});
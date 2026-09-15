// Check whether the user is logged in
const isLoggedIn = localStorage.getItem("isLoggedIn");
const savedUser = localStorage.getItem("recipeUser");

// Find authentication links
const authLinks = document.querySelector(".auth-links");


// Make sure authentication links exist
if (authLinks && isLoggedIn === "true" && savedUser) {

    // Convert stored JSON into an object
    const user = JSON.parse(savedUser);

    // Replace Login and Sign Up links
    authLinks.innerHTML = `
        <span class="welcome-user">
            Welcome, ${user.name}
        </span>

        <a href="#" id="logoutLink">
            Logout
        </a>
    `;

    // Find Logout link
    const logoutLink = document.getElementById("logoutLink");

    // Logout functionality
    logoutLink.addEventListener("click", function (event) {

        event.preventDefault();

        // Remove login status
        localStorage.removeItem("isLoggedIn");

        // Go back to home page
        window.location.href = "index.html";
    });
}
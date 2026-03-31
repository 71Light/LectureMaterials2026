const app = document.getElementById("app");

// --- Navigation handler ---
function navigate(page) {
    if (page === "home") {
        app.innerHTML = "<h1>Home</h1>";
    }

    if (page === "about") {
        app.innerHTML = "<h1>About Me</h1>";
    }

    if (page === "login") {
        app.innerHTML = `
      <h1>Login</h1>
      <input id="usernameInput" placeholder="username" />
    `;
    }
}

// --- Event listeners for nav ---
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (event) => {
        const page = event.target.dataset.page;
        navigate(page);
    });
});

// --- Initial load ---
navigate("home");
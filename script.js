document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    
    // Check local storage for mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Switch to Light Mode";
    } else {
        darkModeToggle.textContent = "Switch to Dark Mode";
    }
    
    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "Switch to Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "Switch to Dark Mode";
        }
    });
    
    // Smooth transition effect
    body.style.transition = "background-color 0.5s, color 0.5s";
});

document.addEventListener("DOMContentLoaded", function() {
    // Check local storage for theme preference
    const theme = localStorage.getItem("theme") || "dark";
    const button = document.querySelector(".toggle-switch input");
    if (theme === "dark") {
        document.body.classList.add("theme-dark");
        document.body.classList.remove("theme-light");
        button.checked = true; // Set toggle switch to checked for dark mode
    } else {
        document.body.classList.add("theme-light");
        document.body.classList.remove("theme-dark");
        button.checked = false; // Set toggle switch to unchecked for light mode
    }

    // Add click listener to toggle switch
    document.querySelector("span.slider").addEventListener("click", function() {
        if (document.body.classList.contains("theme-dark")) {
            document.body.classList.remove("theme-dark");
            document.body.classList.add("theme-light");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("theme-light");
            document.body.classList.add("theme-dark");
            localStorage.setItem("theme", "dark");
        }
    });
});
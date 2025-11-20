document.addEventListener("DOMContentLoaded", () => {
    console.log("Frontend loaded.");

    // Navigate to events page
    document.getElementById("btn-events").addEventListener("click", () => {
        window.location.href = "events.html";
    });

    // Placeholder action
    document.getElementById("btn-learn").addEventListener("click", () => {
        alert("You can add more content here later!");
    });
});

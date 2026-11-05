
// Get all portfolio tabs
const tabButtons = document.querySelectorAll(".tab-button");

// Get all project cards
const projectCards = document.querySelectorAll(".project-card");

// Display projects from a selected category
function showCategory(category) {

    // Update selected tab
    tabButtons.forEach(button => {

        const isActive = button.dataset.category === category;

        button.classList.toggle("active", isActive);

        button.setAttribute("aria-selected", isActive);

    });

    // Display matching projects
    projectCards.forEach(card => {

        const matches = card.dataset.category === category;

        card.style.display = matches ? "block" : "none";

    });
}

// Listen for tab clicks
tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        showCategory(button.dataset.category);

    });

});

// Default category when website loads
showCategory("games");

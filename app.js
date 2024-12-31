// Handle tab clicks and toggle content visibility
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active-tab class from all tabs
        document.querySelectorAll(".tab").forEach(tabElement => tabElement.classList.remove("active-tab"));
        tab.classList.add("active-tab");

        // Determine which content section to show
        const contentId = tab.id === "bioTab" ? "bioContent" : "aboutContent";

        // Hide all content sections and show the selected one
        document.querySelectorAll(".bio-info, .about-section").forEach(content => content.classList.remove("active"));
        document.getElementById(contentId).classList.add("active");
    });
});

// Toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    // Toggle active class on sidebar and content
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
}

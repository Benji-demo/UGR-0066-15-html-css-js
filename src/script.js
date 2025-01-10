// const hamburgerMenu = document.querySelector('.hamburger-menu');
// const headerNav = document.querySelector('.header-nav');

// // Add a click event listener to toggle the menu visibility
// hamburgerMenu.addEventListener('click', () => {
//     // Check if the menu is currently shown
//     if (headerNav.classList.contains('show')) {
//         headerNav.classList.remove('show'); // Hide the menu
//     } else {
//         headerNav.classList.add('show'); // Show the menu
//     }
// });


// document.addEventListener('click', (event) => {
//     const isClickInside = hamburgerMenu.contains(event.target) || headerNav.contains(event.target);
//     if (!isClickInside) {
//         headerNav.classList.remove('show'); // Hide the menu
//     }
// });

// document.querySelector('.hamburger-menu').addEventListener('click', function () {
//     const nav = document.getElementById('hero-header-nav');
//     nav.classList.toggle('show');
// });


document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const headerNav = document.getElementById('hero-header-nav'); // Select by ID

    // Check if elements exist before adding the event listener
    if (!hamburgerMenu || !headerNav) {
        console.error('Hamburger menu or header nav not found!');
        return;
    }

    // Add click event listener to toggle the menu visibility
    hamburgerMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event bubbling

        // Toggle the 'show' class to show/hide the nav
        headerNav.classList.toggle('show');
    });

    // Close the menu if clicking outside the hamburger menu or nav
    document.addEventListener('click', (event) => {
        const isClickInside = hamburgerMenu.contains(event.target) || headerNav.contains(event.target);
        if (!isClickInside) {
            headerNav.classList.remove('show'); // Hide the menu
        }
    });
});
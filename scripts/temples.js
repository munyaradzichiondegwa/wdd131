document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Copyright Year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Last Modified Date
    document.getElementById('last-modified').textContent = new Date(document.lastModified).toLocaleDateString();

    // Hamburger Menu Toggle
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navigation = document.querySelector('.navigation');

    hamburgerMenu.addEventListener('click', () => {
        navigation.classList.toggle('show');
        hamburgerMenu.innerHTML = navigation.classList.contains('show') ? '&times;' : '&#9776;';
    });
});
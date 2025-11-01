document.addEventListener('DOMContentLoaded', function() {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

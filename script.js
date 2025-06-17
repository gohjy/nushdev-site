document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation buttons
    const scrollButtons = document.querySelectorAll('.nav-link-button[data-scroll-to], .hero-button[data-scroll-to]');

    scrollButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = button.getAttribute('data-scroll-to');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            // Close mobile menu if open
            const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
            const mobileMenuButton = document.querySelector('.mobile-menu-button');
            if (!mobileMenuOverlay.classList.contains('hidden')) {
                mobileMenuOverlay.classList.add('hidden');
                mobileMenuButton.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    if (mobileMenuButton && mobileMenuOverlay) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenuOverlay.classList.toggle('hidden');
            mobileMenuButton.classList.toggle('active');
        });
    }

    // Set current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

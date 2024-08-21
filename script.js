// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change nav background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu'); // Make sure this targets the correct menu element

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            menuToggle.classList.toggle('open'); // Optional: For changing icon
        });
    }

    // Contact form validation
    document.querySelector('.contact form')?.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    });

    // Update cart count
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const cartCountElement = document.querySelector('.cart-count');
            let currentCount = parseInt(cartCountElement.textContent, 10);
            cartCountElement.textContent = (isNaN(currentCount) ? 0 : currentCount) + 1;
        });
    });

    // Load more news items (placeholder implementation)
    document.querySelector('.load-more')?.addEventListener('click', () => {
        alert('Load more news items (this should be implemented with actual data fetching)');
    });
});

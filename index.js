const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all skill cards and portfolio cards
document.addEventListener('DOMContentLoaded', () => {
    // Animate skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
    });

    // Animate portfolio cards
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 1rem';
            navbar.style.backgroundColor = 'rgba(16, 0, 43, 0.98)';
        } else {
            navbar.style.padding = '1rem';
            navbar.style.backgroundColor = 'rgba(16, 0, 43, 0.95)';
        }
    });

    // Form submission animation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
        
        setTimeout(() => {
            btn.innerHTML = 'Message Sent!';
            btn.classList.add('btn-success');
            setTimeout(() => {
                btn.innerHTML = 'Send Message';
                btn.classList.remove('btn-success');
                this.reset();
            }, 2000);
        }, 1500);
    });
});
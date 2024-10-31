document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation observer setup
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.skill-card, .portfolio-card, .profile-content');
    animatedElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 100}ms`;
        observer.observe(el);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Form submission animation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            
            btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = 'Message Sent!';
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-success');
                
                setTimeout(() => {
                    btn.innerHTML = 'Send Message';
                    btn.classList.remove('btn-success');
                    btn.classList.add('btn-primary');
                    btn.disabled = false;
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }
});
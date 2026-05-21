// ============================================
// Mobile Menu Toggle
// ============================================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.style.display = 'none';
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Active Navigation Link on Scroll
// ============================================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.style.color = '';
            });
            // Add active style to current link
            if (navLink) {
                navLink.style.color = 'var(--primary-color)';
            }
        }
    });
});

// ============================================
// Contact Form Submission
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Validate form
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Create mailto link
        const mailtoLink = `mailto:Snehadhole7887@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Reset form
        contactForm.reset();
    });
}

// ============================================
// Intersection Observer for Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and achievement cards
document.querySelectorAll('.project-card, .achievement-card, .highlight-card, .skill-category').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ============================================
// Add CSS Animations
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .nav-links {
        animation: slideInRight 0.5s ease-out;
    }
`;
document.head.appendChild(style);

// ============================================
// Responsive Mobile Menu
// ============================================

const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleMediaChange(e) {
    if (e.matches) {
        // Mobile view
        if (navLinks) {
            navLinks.style.display = 'none';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.flexDirection = 'column';
            navLinks.style.gap = '1rem';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            navLinks.style.zIndex = '999';
        }
    } else {
        // Desktop view
        if (navLinks) {
            navLinks.style.display = 'flex';
            navLinks.style.position = 'relative';
            navLinks.style.boxShadow = 'none';
        }
    }
}

mediaQuery.addListener(handleMediaChange);
handleMediaChange(mediaQuery);

// ============================================
// Scroll to Top Button
// ============================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        // Could add a "scroll to top" button here if desired
    }
});

// ============================================
// Performance Optimization
// ============================================

// Lazy load images if any are added
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// Console Welcome Message
// ============================================

console.log('%c Welcome to Sneha Dhole\'s Portfolio! ', 'background: #667eea; color: white; font-size: 16px; padding: 10px;');
console.log('%c Feel free to explore and connect! ', 'background: #764ba2; color: white; font-size: 14px; padding: 8px;');

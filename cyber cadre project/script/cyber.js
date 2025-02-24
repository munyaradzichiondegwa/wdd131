document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"], a[href^="."]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple role card hover effect
    const roleCards = document.querySelectorAll('.role-card');
    roleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Value cards interaction
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Objective Cards Interaction
    const objectiveCards = document.querySelectorAll('.objective-card');
    objectiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Dynamic copyright year update
    const copyrightYear = document.querySelector('.footer-bottom p');
    if (copyrightYear) {
        const currentYear = new Date().getFullYear();
        copyrightYear.textContent = `© ${currentYear} Presidential Communication Unit. All Rights Reserved.`;
    }

    // Simple form validation (if contact form exists)
    const contactFormValidation = document.querySelector('.contact-form');
    if (contactFormValidation) {
        contactFormValidation.addEventListener('submit', function(e) {
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill out all fields.');
            }
        });
    }

    // Scroll-triggered animations for value cards
    const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    valueCards.forEach(card => {
        valueObserver.observe(card);
    });

    // Intersection Observer for Objective Cards
    const objectiveObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    objectiveCards.forEach(card => {
        objectiveObserver.observe(card);
    });

    // Text Reveal Animation for Mission Statement
    const missionBlockquote = document.querySelector('blockquote');
    if (missionBlockquote) {
        const text = missionBlockquote.textContent;
        missionBlockquote.innerHTML = text.split('').map(char => 
            `<span style="display:inline-block; opacity:0; animation: fadeIn 0.5s forwards;">${char}</span>`
        ).join('');

        const spans = missionBlockquote.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.animationDelay = `${index * 0.05}s`;
        });
    }

    // Contact Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = this.querySelector('input[placeholder="Your Name"]');
            const email = this.querySelector('input[placeholder="Your Email"]');
            const message = this.querySelector('textarea');

            if (!name.value || !email.value || !message.value) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Please enter a valid email address');
                return;
            }

            // Simulated form submission (replace with actual backend logic)
            try {
                // You would typically use fetch or AJAX here to send to a backend
                console.log('Form Submitted', {
                    name: name.value,
                    email: email.value,
                    message: message.value
                });

                // Success feedback
                const submitButton = this.querySelector('.btn');
                submitButton.textContent = 'Message Sent!';
                submitButton.style.backgroundColor = '#4caf50';
                
                // Reset form after submission
                setTimeout(() => {
                    this.reset();
                    submitButton.textContent = 'Send Message';
                    submitButton.style.backgroundColor = '#4fc3f7';
                }, 3000);
            } catch (error) {
                console.error('Submission error:', error);
                alert('Failed to send message. Please try again.');
            }
        });
    }

    // Dynamic Contact Card Hover Effects
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Copy Contact Information
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
            const contactInfo = this.innerText.split('\n')[1]; // Get first contact line
            navigator.clipboard.writeText(contactInfo).then(() => {
                // Optional: Show tooltip or temporary feedback
                const originalBackground = this.style.backgroundColor;
                this.style.backgroundColor = '#e6f3ff';
                setTimeout(() => {
                    this.style.backgroundColor = originalBackground;
                }, 500);
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Previous JS code remains the same, with additions for about page

    // Value Cards Interactive Effects
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-15px)';
            this.style.boxShadow = '0 15px 25px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
        });
    });

    // Scroll Animation for Core Responsibilities
    const responsibilitiesList = document.querySelector('.about-content ul');
    if (responsibilitiesList) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('list-animated');
                }
            });
        }, { threshold: 0.1 });

        observer.observe(responsibilitiesList);
    }

    // Dynamic Content Loading (Optional)
    function loadAdditionalContent() {
        const additionalInfo = document.createElement('div');
        additionalInfo.classList.add('additional-info');
        additionalInfo.innerHTML = `
            <h3>Our Digital Transformation</h3>
            <p>The Presidential Communication Unit is at the forefront of digital communication strategies, leveraging cutting-edge technologies to enhance government-citizen interactions.</p>
        `;
        
        const aboutContent = document.querySelector('.about-content');
        if (aboutContent) {
            aboutContent.appendChild(additionalInfo);
        }
    }

    // Uncomment if you want to dynamically load additional content
    // loadAdditionalContent();

    // Accessibility Enhancements
    valueCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.focus();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Support Cards Interactive Effects
    const supportCards = document.querySelectorAll('.support-card');
    
    supportCards.forEach(card => {
        // Card Hover Depth Effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 6px 15px rgba(0,0,0,0.08)';
        });

        // Accessibility Enhancements
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const btn = this.querySelector('.btn');
                if (btn) btn.click();
            }
        });
    });

    // Dynamic Content Loading
    function loadSupportResources() {
        const supportOptions = document.querySelector('.support-options');
        
        if (supportOptions) {
            const emergencyCard = document.createElement('div');
            emergencyCard.classList.add('support-card');
            emergencyCard.innerHTML = `
                <h3>Emergency Support</h3>
                <p>Urgent communication and crisis management resources</p>
                <a href="#" class="btn">Emergency Protocols</a>
            `;
            
            supportOptions.appendChild(emergencyCard);
            
            // Animate the new card
            emergencyCard.style.opacity = '0';
            emergencyCard.style.animation = 'fadeInUp 0.6s ease forwards';
            emergencyCard.style.animationDelay = '0.8s';
        }
    }

    // Uncomment to dynamically add emergency support card
    // loadSupportResources();

    // Interactive Modal Simulation (placeholder)
    function setupModalInteractions() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log(`Clicked: ${this.textContent}`);
                
                // Simulated interaction feedback
                this.style.backgroundColor = '#03a9f4';
                setTimeout(() => {
                    this.style.backgroundColor = '#4fc3f7';
                }, 300);
            });
        });
    }

    setupModalInteractions();

    // Performance and Tracking Placeholder
    function trackUserInteractions() {
        supportCards.forEach(card => {
            card.addEventListener('click', function() {
                // Placeholder for analytics tracking
                console.log(`Interaction with: ${this.querySelector('h3').textContent}`);
            });
        });
    }

    trackUserInteractions();
});
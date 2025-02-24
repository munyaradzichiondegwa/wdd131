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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About PCU | Presidential Communication Unit</title>
    <meta name="description" content="Explore the various roles and responsibilities within the Presidential Communication Unit.">
    <meta name="keywords" content="organization, team roles, communication, government">
    <meta name="author" content="Munyaradzi Chiondegwa">
    <link rel="stylesheet" href="styles.css">
    <script src="script/cyber.js"></script>
</head>
<body>
    <header class="site-header">
        <div class="header-container">
            <div class="logo">
                <img src="images/logo.png" alt="PCU Logo" class="logo-image">
                <h1>Presidential Communication Unit</h1>
            </div>
            <nav class="main-navigation">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About PCU</a></li>
                    <li><a href="mission.html">Our Mission</a></li>
                    <li><a href="roles.html">Roles</a></li>
                    <li><a href="support.html">Support</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="page-content">
        <section class="about-section">
            <img src="images/presidential-image.jpg" alt="Presidential Cyber Unit in Action" class="presidential-image">
            <div class="hero-overlay">
                <h2>About the Presidential Communication Unit</h2>
                <p>The Presidential Cyber Unit (PCU) is a critical infrastructure responsible for managing and strategizing communication efforts for the highest levels of government. Our mission is to enhance the government's digital presence, ensure cybersecurity, and effectively communicate government initiatives to the public.</p>
            </div>
        </section>

        <div class="about-content">
            <p>The Presidential Cyber Unit is a specialized team established to enhance the 
                government's digital presence, ensure cybersecurity, and effectively communicate 
                government initiatives to the public. In the context of the Second Republic, the unit 
                plays a pivotal role in articulating government programs, showcasing projects, and 
                fostering public engagement through digital platforms</p>
            
            <h3>Our Core Responsibilities</h3>
            <ul>
                <li>Strategic Communication Management</li>
                <p>Craft clear, consistent, and compelling narratives around government programs to ensure public understanding and support.
                - Highlight the benefits and impact of these programs on citizens' lives.
                 </p>
                <li>Public Information Dissemination</li>
                <p> - Foster two-way communication with citizens by responding to queries, feedback, and concerns on social media.
                    - Use analytics to understand public sentiment and tailor communication strategies accordingly.</p>
                <li>Media Engagement and Relations</li>
                <p>- Partner with media houses, influencers, and community leaders to amplify reach.
                    - Engage with international organizations to showcase the Second Republic's achievements on a global stage.
                 </p>
                <li>Digital and Traditional Media Coordination</li>
                <p>- Utilize platforms like Twitter, Facebook, Instagram, and YouTube to reach a wide audience.
                - Leverage live streaming for real-time updates and engagement.
                - Create visually appealing content such as videos, animations, and infographics.
                - Use storytelling techniques to make government programs relatable and impactful.</p>
            </ul>

            <h3>Our Values</h3>
            <div class="values-grid">
                <div class="value-card">
                    <h4>Transparency</h4>
                    <p>Committed to open and clear communication</p>
                </div>
                <div class="value-card">
                    <h4>Integrity</h4>
                    <p>Maintaining the highest standards of ethical communication</p>
                </div>
                <div class="value-card">
                    <h4>Responsiveness</h4>
                    <p>Quick and accurate communication in all scenarios</p>
                </div>
            </div>
        </div>
    </main>

    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>Presidential Communication Unit</h4>
                <p>Strategic Communication &amp; Operational Excellence</p>
            </div>
            <div class="footer-section">
                <h4>Follow Us</h4>
                <div class="social-icons">
                    <a href="#" class="social-icon">Official Channels</a>
                    <a href="#" class="social-icon">Press Releases</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Presidential Communication Unit. All Rights Reserved.</p>
        </div>
    </footer>
</body>
</html>
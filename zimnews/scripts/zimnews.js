document.addEventListener('DOMContentLoaded', () => {
    // Interactive navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.style.color = '#ffc107';
        });
        link.addEventListener('mouseleave', (e) => {
            e.target.style.color = 'white';
        });
    });

    // Smooth scrolling
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        const heroSection = document.querySelector('.hero-section');
        const heroOverlay = document.querySelector('.hero-overlay');
        const heroImage = heroSection.querySelector('img');
    
        // Hero Section Reveal Animation
        function revealHeroSection() {
            heroOverlay.classList.add('visible');
        }
    
        // Parallax Effect
        function handleParallaxScroll() {
            const scrollPosition = window.pageYOffset;
            heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    
        // Interactive Hero Image Hover Effect
        function handleHeroImageHover() {
            heroImage.addEventListener('mouseenter', () => {
                heroImage.style.transform = 'scale(1.05)';
            });
    
            heroImage.addEventListener('mouseleave', () => {
                heroImage.style.transform = 'scale(1)';
            });
        }
    
        // Initialize Hero Section Interactions
        function initHeroInteractions() {
            // Delayed reveal
            setTimeout(revealHeroSection, 300);
    
            // Parallax scrolling
            window.addEventListener('scroll', handleParallaxScroll);
    
            // Hover effect
            handleHeroImageHover();
        }
    
        // Run initialization
        initHeroInteractions();
    });

    // CTA Button Animation
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', () => {
            ctaButton.style.transform = 'scale(1.05)';
        });
        ctaButton.addEventListener('mouseout', () => {
            ctaButton.style.transform = 'scale(1)';
        });
    }

    // Tracking and logging
    console.log('Zimbabwe News Digital Platform Initialized');
});


// app.js - Comprehensive JavaScript for Zimbabwe News Website

// Utility Functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Navigation Active State Management
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = $$('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Projects Page Interactions
function initProjectsPage() {
    const projectCards = $$('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
        });
    });
}

// Media Page Dynamic Content Loading
function initMediaPage() {
    const mediaTimeline = $('.media-timeline');
    
    // Simulated media updates
    const mediaUpdates = [
        {
            title: "National Digital Strategy",
            description: "Comprehensive digital transformation roadmap unveiled",
            date: "February 15, 2025"
        },
        {
            title: "Cybersecurity Enhancement",
            description: "New initiatives to protect national digital infrastructure",
            date: "January 22, 2025"
        }
    ];
    
    function renderMediaUpdates() {
        mediaTimeline.innerHTML = mediaUpdates.map(update => `
            <div class="media-item">
                <h3>${update.title}</h3>
                <p>${update.description}</p>
                <small>${update.date}</small>
            </div>
        `).join('');
    }
    
    renderMediaUpdates();
}

// Contact Form Validation and Submission
function initContactForm() {
    const contactForm = $('#contactForm');
    
    // Email Validation Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    function validateForm(e) {
        e.preventDefault();
        
        const nameInput = $('#name');
        const emailInput = $('#email');
        const messageInput = $('#message');
        
        let isValid = true;
        
        // Name Validation
        if (nameInput.value.trim().length < 2) {
            alert('Please enter a valid name');
            nameInput.focus();
            isValid = false;
            return;
        }
        
        // Email Validation
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            isValid = false;
            return;
        }
        
        // Message Validation
        if (messageInput.value.trim().length < 10) {
            alert('Message must be at least 10 characters long');
            messageInput.focus();
            isValid = false;
            return;
        }
        
        if (isValid) {
            submitForm(nameInput.value, emailInput.value, messageInput.value);
        }
    }
    
    function submitForm(name, email, message) {
        // Simulated form submission
        console.log('Form Submitted:', { name, email, message });
        
        // Show success message
        alert(`Thank you, ${name}! Your message has been received.`);
        
        // Reset form
        contactForm.reset();
    }
    
    contactForm.addEventListener('submit', validateForm);
}

// Responsive Menu Toggle (for mobile)
function initMobileMenu() {
    const menuToggle = $('.menu-toggle');
    const navLinks = $('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = $('#themeToggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', 
                document.body.classList.contains('dark-mode') ? 'dark' : 'light'
            );
        });
    }
}

// Scroll Reveal Effects
function initScrollReveal() {
    const revealElements = $$('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(element => observer.observe(element));
}

// Analytics and Tracking (Placeholder)
function initAnalytics() {
    // Simulated page view tracking
    console.log(`Page Viewed: ${window.location.pathname}`);
}

// Main Initialization Function
function init() {
    // Call page-specific initializations
    setActiveNavLink();
    
    // Page-specific scripts
    if (document.body.classList.contains('projects-page')) {
        initProjectsPage();
    }
    
    if (document.body.classList.contains('media-page')) {
        initMediaPage();
    }
    
    if (document.body.classList.contains('contact-page')) {
        initContactForm();
    }
    
    // Universal initializations
    initMobileMenu();
    initThemeToggle();
    initScrollReveal();
    initAnalytics();
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Optional: Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cyber Operations Page Specific Functions
function initCyberOperationsPage() {
    const threatLevelVisual = $('#threatLevelVisual');
    const alertsList = $('#alertsList');

    // Simulated Threat Levels and Alerts
    const threatLevels = [
        { level: 'Low', color: 'green', position: '10%' },
        { level: 'Moderate', color: 'yellow', position: '50%' },
        { level: 'High', color: 'red', position: '90%' }
    ];

    const activeAlerts = [
        "Potential DDoS attempt detected",
        "Unauthorized network probe identified",
        "Suspicious traffic from unknown IP range"
    ];

    // Populate Threat Level Visual
    if (threatLevelVisual) {
        const currentThreat = threatLevels[1]; // Default to moderate
        threatLevelVisual.innerHTML = `
            <div style="position: absolute; left: ${currentThreat.position}; 
                        width: 20px; height: 20px; 
                        background-color: black; 
                        border-radius: 50%; 
                        transform: translateX(-50%);"></div>
        `;
        threatLevelVisual.style.background = 
            `linear-gradient(to right, ${threatLevels.map(t => t.color).join(',')})`;
    }

    // Populate Active Alerts
    if (alertsList) {
        alertsList.innerHTML = activeAlerts.map(alert => 
            `<li>${alert}</li>`
        ).join('');
    }
}

// Modify existing init function to include Cyber Operations initialization
function init() {
    // ... existing code ...

    if (document.body.classList.contains('cyber-operations-page')) {
        initCyberOperationsPage();
    }
}

// Global variables for date and weather
let currentDate = null;
let weatherData = null;

// Function to get current date and time
function getCurrentDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    return now.toLocaleString('en-ZW', options);
}

// Function to get last modified date of the page
function getLastModifiedDate() {
    const lastModified = new Date(document.lastModified);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return lastModified.toLocaleString('en-ZW', options);
}

// Function to fetch weather data (mock implementation)
async function fetchWeatherData() {
    try {
        // In a real-world scenario, replace with actual API call
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Harare,ZW&appid=YOUR_API_KEY&units=metric');
        const data = await response.json();
        
        return {
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        };
    } catch (error) {
        console.error('Weather fetch error:', error);
        return {
            temperature: 25,
            description: 'Partly Cloudy',
            icon: '🌤️'
        };
    }
}

// Initialize hamburger menu functionality
function initHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

// Function to update page metadata
async function updatePageMetadata() {
    // Update date and time
    currentDate = getCurrentDateTime();
    const dateDisplay = document.getElementById('currentDateTime');
    if (dateDisplay) {
        dateDisplay.textContent = currentDate;
    }

    // Update last modified
    const lastModifiedDisplay = document.getElementById('lastModified');
    if (lastModifiedDisplay) {
        lastModifiedDisplay.textContent = getLastModifiedDate();
    }

    // Fetch and display weather
    try {
        weatherData = await fetchWeatherData();
        const weatherDisplay = document.getElementById('weatherInfo');
        if (weatherDisplay && weatherData) {
            weatherDisplay.innerHTML = `
                <span>${weatherData.temperature}°C</span>
                <span>${weatherData.description}</span>
            `;
        }
    } catch (error) {
        console.error('Weather update failed:', error);
    }
}

// Modify existing init function
function init() {
    // Existing initialization code

    // Initialize hamburger menu
    initHamburgerMenu();

    // Update page metadata
    updatePageMetadata();

    // Optional: Update metadata periodically
    setInterval(updatePageMetadata, 60000); // Update every minute
}

// Ensure init runs when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Date and Time Display
    function updateDateTime() {
        const currentDateElement = document.getElementById('current-date');
        const currentDateTimeElement = document.getElementById('currentDateTime');
        const now = new Date();
        
        const options = {
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit'
        };
        
        const formattedDate = now.toLocaleDateString('en-ZW', options);
        
        if (currentDateElement) {
            currentDateElement.textContent = formattedDate;
        }
        
        if (currentDateTimeElement) {
            currentDateTimeElement.textContent = formattedDate;
        }
    }

    // Weather Function (Mock Implementation)
    async function fetchWeather() {
        const weatherElement = document.getElementById('weatherInfo');
        
        try {
            // Mock weather data for Harare, Zimbabwe
            const weatherData = {
                temperature: 25,
                description: 'Partly Cloudy',
                location: 'Harare'
            };

            if (weatherElement) {
                weatherElement.innerHTML = `
                    <span>${weatherData.location}</span>
                    <span>${weatherData.temperature}°C</span>
                    <span>${weatherData.description}</span>
                `;
            }
        } catch (error) {
            console.error('Weather fetch error:', error);
        }
    }

    // Last Modified Date
    function updateLastModified() {
        const lastModifiedElement = document.getElementById('lastModified');
        if (lastModifiedElement) {
            const lastModified = new Date(document.lastModified);
            lastModifiedElement.textContent = lastModified.toLocaleDateString('en-ZW', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }
    }

    // Initial Updates
    updateDateTime();
    fetchWeather();
    updateLastModified();

    // Update date and time every second
    setInterval(updateDateTime, 1000);

    // Update weather periodically
    setInterval(fetchWeather, 600000); // Every 10 minutes
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    const heroImage = document.querySelector('.hero-image');
    const contactCards = document.querySelectorAll('.contact-card');

    // Form Submission Handler
    function handleFormSubmission(event) {
        event.preventDefault();
        
        // Basic validation
        const nameInput = event.target.querySelector('input[placeholder="Your Name"]');
        const emailInput = event.target.querySelector('input[placeholder="Your Email"]');
        const messageInput = event.target.querySelector('textarea');

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill in all fields');
            return;
        }

        // Simulate form submission
        alert('Message sent successfully! We will get back to you soon.');
        event.target.reset();
    }

    // Parallax Hero Image Effect
    function handleParallaxScroll() {
        const scrollPosition = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }

    // Contact Card Interactions
    function initContactCardAnimations() {
        contactCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
            });
        });
    }

    // Event Listeners
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    window.addEventListener('scroll', handleParallaxScroll);

    // Initialize Card Animations
    initContactCardAnimations();

    // Optional: Dynamic Last Modified Date
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleDateString();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Resource Card Interactions
    const resourceCards = document.querySelectorAll('.resource-card');
    
    function initResourceCardAnimations() {
        resourceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            });
        });
    }

    // Media Item Hover Effects
    const mediaItems = document.querySelectorAll('.media-item');
    
    function initMediaItemAnimations() {
        mediaItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(10px)';
                item.style.backgroundColor = '#e9ecef';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
                item.style.backgroundColor = '#f8f9fa';
            });
        });
    }

    // Dynamic Content Loading Simulation
    function simulateContentLoading() {
        const timeline = document.querySelector('.media-timeline');
        
        // Simulated additional media items
        const additionalItems = [
            {
                title: 'National Cybersecurity Workshop',
                description: 'Experts discuss emerging digital threats and mitigation strategies'
            },
            {
                title: 'Digital Innovation Summit',
                description: 'Showcasing Zimbabwe\'s technological advancements'
            }
        ];

        additionalItems.forEach(item => {
            const mediaItem = document.createElement('div');
            mediaItem.classList.add('media-item');
            mediaItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            timeline.appendChild(mediaItem);
        });
    }

    // Last Modified Date
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleDateString();
    }

    // Initialize Animations and Simulations
    initResourceCardAnimations();
    initMediaItemAnimations();
    simulateContentLoading();
});

document.addEventListener('DOMContentLoaded', function() {
    // Current Date and Time Display
    function updateDateTime() {
        const currentDateTimeElement = document.getElementById('currentDateTime');
        if (currentDateTimeElement) {
            const now = new Date();
            currentDateTimeElement.textContent = now.toLocaleString('en-ZW', {
                dateStyle: 'full',
                timeStyle: 'long'
            });
        }
    }

    // Last Modified Display
    function updateLastModified() {
        const lastModifiedElement = document.getElementById('lastModified');
        if (lastModifiedElement) {
            const lastModified = document.lastModified;
            lastModifiedElement.textContent = lastModified;
        }
    }

    // Simple Weather Information (Placeholder)
    function updateWeatherInfo() {
        const weatherInfoElement = document.getElementById('weatherInfo');
        if (weatherInfoElement) {
            // In a real scenario, this would be fetched from a weather API
            weatherInfoElement.textContent = 'Harare: 25°C, Partly Cloudy';
        }
    }

    // Mobile Menu Toggle
    function setupMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        }
    }

    // Initialize Functions
    updateDateTime();
    updateLastModified();
    updateWeatherInfo();
    setupMobileMenu();

    // Update date and time every second
    setInterval(updateDateTime, 1000);
});
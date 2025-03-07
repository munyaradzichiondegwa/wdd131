// Enhanced News Management System
class NewsManager {
    constructor(newsData = []) {
        this.newsData = newsData;
        this.newsGrid = document.getElementById('news-grid');
        this.searchInput = document.querySelector('.news-filters input');
        
        // Configuration
        this.config = {
            maxNewsItems: 9,
            categoryColors: {
                'Policy': 'bg-primary',
                'Announcement': 'bg-success',
                'Project Update': 'bg-info',
                'Economic': 'bg-warning'
            }
        };

        // Bind methods
        this.init = this.init.bind(this);
        this.loadNews = this.loadNews.bind(this);
        this.filterNews = this.filterNews.bind(this);
    }

    // Sanitize HTML to prevent XSS
    sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }

    // Create news card template
    createNewsCardTemplate(newsItem) {
        const categoryClass = this.config.categoryColors[newsItem.category] || 'bg-secondary';
        
        return `
            <div class="col-md-4 news-item" data-category="${this.sanitizeHTML(newsItem.category.toLowerCase())}">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <span class="badge ${categoryClass} mb-2">
                            ${this.sanitizeHTML(newsItem.category)}
                        </span>
                        <h5 class="card-title">${this.sanitizeHTML(newsItem.title)}</h5>
                        <p class="card-text text-muted">
                            ${this.sanitizeHTML(newsItem.summary)}
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">
                                <i class="far fa-calendar-alt me-1"></i>
                                ${this.formatDate(newsItem.date)}
                            </small>
                            <a href="#" class="btn btn-sm btn-outline-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Format date nicely
    formatDate(dateString) {
        try {
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            return new Date(dateString).toLocaleDateString('en-US', options);
        } catch (error) {
            console.warn('Invalid date format:', dateString);
            return dateString;
        }
    }

    // Load news with error handling
    loadNews() {
        try {
            // Clear previous content
            this.newsGrid.innerHTML = '';

            // Slice to limit number of news items
            const displayNews = this.newsData.slice(0, this.config.maxNewsItems);

            // Generate news cards
            const newsHTML = displayNews
                .map(item => this.createNewsCardTemplate(item))
                .join('');

            this.newsGrid.innerHTML = newsHTML;

            // Add event listeners to 'Read More' buttons
            this.addReadMoreListeners();
        } catch (error) {
            console.error('Error loading news:', error);
            this.newsGrid.innerHTML = `
                <div class="col-12 text-center">
                    <p class="alert alert-danger">
                        Unable to load news. Please try again later.
                    </p>
                </div>
            `;
        }
    }

    // Add read more functionality
    addReadMoreListeners() {
        this.newsGrid.querySelectorAll('.btn-outline-primary').forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showNewsModal(this.newsData[index]);
            });
        });
    }

    // Show full news in modal
    showNewsModal(newsItem) {
        const modal = document.getElementById('newsModal');
        if (modal) {
            modal.querySelector('.modal-title').textContent = newsItem.title;
            modal.querySelector('.modal-body').innerHTML = `
                <p><strong>Date:</strong> ${this.formatDate(newsItem.date)}</p>
                <p><strong>Category:</strong> ${newsItem.category}</p>
                <p>${newsItem.summary}</p>
                <!-- Add more details as needed -->
            `;
            // Bootstrap modal show method
            new bootstrap.Modal(modal).show();
        }
    }

    // News filtering with debounce
    filterNews() {
        const searchTerm = this.searchInput.value.toLowerCase().trim();
        const categoryFilter = document.querySelector('.category-filter .active')?.dataset.category || 'all';

        const newsItems = this.newsGrid.querySelectorAll('.news-item');
        
        newsItems.forEach(item => {
            const titleMatch = item.textContent.toLowerCase().includes(searchTerm);
            const categoryMatch = categoryFilter === 'all' || 
                item.dataset.category === categoryFilter;
            
            item.style.display = (titleMatch && categoryMatch) ? 'block' : 'none';
        });
    }

    // Initialize the news system
    init() {
        // Load initial news
        this.loadNews();

        // Setup search input with debounce
        let searchTimeout;
        this.searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(this.filterNews, 300);
        });

        // Category filter setup
        document.querySelectorAll('.category-filter .btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active from all
                document.querySelectorAll('.category-filter .btn').forEach(b => 
                    b.classList.remove('active')
                );
                
                // Add active to clicked
                btn.classList.add('active');
                this.filterNews();
            });
        });
    }
}

// Sample News Data
const newsData = [
    {
        title: "NDS2 Preparation Underway",
        date: "2024-03-15", 
        category: "Policy", 
        summary: "Government finalizes comprehensive plans for National Development Strategy implementation"
    },
    {
        title: "Economic Reforms Announced",
        date: "2024-02-20", 
        category: "Announcement", 
        summary: "New economic policy measures to boost investment and growth"
    },
    // Add more news items
];

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    const newsManager = new NewsManager(newsData);
    newsManager.init();
});

// Carousel Enhancement
class HeroBannerCarousel {
    constructor(selector, interval = 5000) {
        this.slides = document.querySelectorAll(selector);
        this.interval = interval;
        this.currentSlide = 0;
        this.isRunning = false;
    }

    cycleSlides() {
        if (this.slides.length <= 1) return;

        // Remove active from current slide
        this.slides[this.currentSlide].classList.remove('active');

        // Move to next slide
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;

        // Add active to new slide
        this.slides[this.currentSlide].classList.add('active');
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.intervalId = setInterval(() => this.cycleSlides(), this.interval);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.isRunning = false;
        }
    }

    init() {
        if (this.slides.length > 0) {
            // Initial slide setup
            this.slides[0].classList.add('active');
            
            // Optional: Pause on hover
            this.slides.forEach(slide => {
                slide.addEventListener('mouseenter', () => this.stop());
                slide.addEventListener('mouseleave', () => this.start());
            });

            this.start();
        }
    }
}

// Initialize Carousel
document.addEventListener('DOMContentLoaded', () => {
    const heroBannerCarousel = new HeroBannerCarousel('.hero-slide');
    heroBannerCarousel.init();
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // Animation duration in milliseconds
        
        const updateCounter = () => {
            const count = +counter.innerText;
            const increment = target / duration * 50;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 50);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    const observerOptions = {
        threshold: 0.8
    };

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('aria-valuenow') + '%';
                progressBar.style.width = targetWidth;
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => progressObserver.observe(bar));

    // Animate cards on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    animateElements.forEach(el => animationObserver.observe(el));

    // Smooth tab transitions
    const tabLinks = document.querySelectorAll('[data-bs-toggle="tab"]');
    
    tabLinks.forEach(link => {
        link.addEventListener('shown.bs.tab', (e) => {
            const targetContent = document.querySelector(e.target.getAttribute('data-bs-target'));
            targetContent.querySelectorAll('.animate-on-scroll').forEach(el => {
                el.classList.add('visible');
            });
        });
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            boundary: 'window'
        });
    });

    // Print functionality for strategy tables
    document.querySelectorAll('.print-strategy').forEach(btn => {
        btn.addEventListener('click', () => {
            const table = btn.closest('.table-responsive').querySelector('table');
            const win = window.open('');
            win.document.write('<style>' + 
                'table { border-collapse: collapse; width: 100%; }' +
                'th, td { padding: 0.75rem; border: 1px solid #dee2e6; }' +
                'th { background-color: #006b3f; color: white; }' +
                'tr:nth-child(even) { background-color: #f8f9fa; }' +
                '</style>');
            win.document.write(table.outerHTML);
            win.print();
            win.close();
        });
    });
});
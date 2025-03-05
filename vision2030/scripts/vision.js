// News Data
const newsData = [
    {
        title: "NDS2 Preparation Underway",
        date: "2024-03-15",
        category: "Policy",
        summary: "Government finalizes plans for NDS2 implementation"
    },
    // Add more news items
];

// News Loader Function
function loadNews() {
    const newsGrid = document.getElementById('news-grid');
    newsData.forEach(item => {
        newsGrid.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <span class="badge bg-primary">${item.category}</span>
                        <h5 class="card-title mt-2">${item.title}</h5>
                        <p class="card-text">${item.summary}</p>
                        <small class="text-muted">${item.date}</small>
                    </div>
                </div>
            </div>
        `;
    });
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    loadNews();
});

// Hero Banner Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');

function cycleSlides() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Initialize Carousel
if(slides.length > 0) {
    setInterval(cycleSlides, 5000);
}

// Project Filtering
document.querySelectorAll('.btn-filter').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.textContent.toLowerCase();
        filterProjects(filter);
    });
});

function filterProjects(filter) {
    document.querySelectorAll('.project-card').forEach(card => {
        const shouldShow = filter === 'all' || card.classList.contains(filter);
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// News Search
document.querySelector('.news-filters input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.news-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});
// News Data
const newsData = [
    {
        title: "NDS2 Preparation Underway",
        date: "2024-03-15",
        category: "Policy",
        summary: "Government finalizes plans for NDS2 implementation"
    },
    {
        title: "New Agricultural Reforms Announced",
        date: "2024-04-10",
        category: "Agriculture",
        summary: "The government has implemented key reforms to boost sustainable farming."
    }
    // Add more news items as needed
];

// Utility Function: Format Date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}

// News Loader Function
function loadNews() {
    const newsGrid = document.getElementById('news-grid');
    newsGrid.innerHTML = ''; // Clear any existing news items
    newsData.forEach(item => {
        newsGrid.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <span class="badge bg-primary">${item.category}</span>
                        <h5 class="card-title mt-2">${item.title}</h5>
                        <p class="card-text">${item.summary}</p>
                        <small class="text-muted">${formatDate(item.date)}</small>
                    </div>
                </div>
            </div>
        `;
    });
}

// Get Current Date and Last Changed Element
function updateLastChanged() {
    const lastChangedElement = document.getElementById('last-changed');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    lastChangedElement.textContent = `Last updated: ${formattedDate}`;
}

// Weather API Integration
async function loadWeather(city = 'Harare') {
    const weatherElement = document.getElementById('weather-info');
    try {
        const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your weather API key
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        weatherElement.textContent = `Weather in ${data.name}: ${data.weather[0].description}, ${data.main.temp}°C`;
    } catch (error) {
        weatherElement.textContent = 'Unable to load weather information.';
        console.error('Weather API Error:', error);
    }
}

// Hero Banner Carousel Logic
let currentSlide
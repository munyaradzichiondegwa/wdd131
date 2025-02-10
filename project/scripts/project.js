// Home Page - Dynamic Garden List
const gardenList = document.getElementById('garden-list');
const gardens = [
    { name: "Garden A", description: "Organic vegetables in downtown." },
    { name: "Garden B", description: "Flower garden for pollinators." },
    { name: "Garden C", description: "Educational garden for schools." }
];

gardens.forEach(garden => {
    const gardenDiv = document.createElement('div');
    gardenDiv.innerHTML = `<h3>${garden.name}</h3><p>${garden.description}</p>`;
    gardenList.appendChild(gardenDiv);
});

// Events Page - Add Event Form
const eventForm = document.getElementById('add-event-form');
const eventList = document.getElementById('event-list');

eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventItem = document.createElement('div');
    eventItem.innerHTML = `<strong>${eventName}</strong> - ${eventDate}`;
    eventList.appendChild(eventItem);
    localStorage.setItem(eventName, eventDate);
    eventForm.reset();
});

// Load Events from LocalStorage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const eventItem = document.createElement('div');
    eventItem.innerHTML = `<strong>${key}</strong> - ${value}`;
    eventList.appendChild(eventItem);
}

// Weather API Integration
const weatherInfo = document.getElementById('weather-info');

async function fetchWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = 'YourCity'; // Replace with your city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const { temp, humidity } = data.main;
        const weatherDescription = data.weather[0].description;
        weatherInfo.innerHTML = `
            <p>Temperature: ${temp}°C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Condition: ${weatherDescription}</p>
        `;
    } catch (error) {
        weatherInfo.innerHTML = `<p>Failed to fetch weather data.</p>`;
    }
}

fetchWeather();

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
});
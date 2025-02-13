// Home Page - Dynamic Garden List
const gardenList = document.getElementById('garden-list');
if (gardenList) {
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
}

// Events Page - Add Event Form
const eventForm = document.getElementById('add-event-form');
const eventList = document.getElementById('event-list');

if (eventForm && eventList) {
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;

        // Save event to localStorage
        localStorage.setItem(eventName, eventDate);

        // Display event on the page
        const eventItem = document.createElement('div');
        eventItem.innerHTML = `<strong>${eventName}</strong> - ${eventDate}`;
        eventList.appendChild(eventItem);

        // Reset the form
        eventForm.reset();
    });

    // Load Events from LocalStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        // Display each event on the page
        const eventItem = document.createElement('div');
        eventItem.innerHTML = `<strong>${key}</strong> - ${value}`;
        eventList.appendChild(eventItem);
    }
}

// Weather API Integration
const weatherInfo = document.getElementById('weather-info');

if (weatherInfo) {
    async function fetchWeather() {
        const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
        const city = 'Harare, Zimbabwe'; // Replace with your city
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch weather data');

            const data = await response.json();
            const { temp, humidity } = data.main;
            const weatherDescription = data.weather[0].description;

            // Display weather data
            weatherInfo.innerHTML = `
                <p>Temperature: ${temp}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Condition: ${weatherDescription}</p>
            `;
        } catch (error) {
            weatherInfo.innerHTML = `<p>Failed to fetch weather data.</p>`;
            console.error(error);
        }
    }

    fetchWeather();
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display confirmation message
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Reset the form
        contactForm.reset();
    });
}


// Update Footer with Last Modified Date
const footerParagraph = document.querySelector('footer p');
if (footerParagraph) {
    const lastModified = new Date(document.lastModified);

    // Format the date as YYYY-MM-DD
    const year = lastModified.getFullYear();
    const month = String(lastModified.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(lastModified.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    // Append the formatted date to the footer
    footerParagraph.innerHTML += ` | Last Updated: ${formattedDate}`;
}
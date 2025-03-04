// Weather API Integration
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key
const city = "Harare"; // Replace with the desired city

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = `Weather: ${data.weather[0].description}, Temp: ${data.main.temp}°C, Wind: ${data.wind.speed} m/s, Humidity: ${data.main.humidity}%`;
        document.getElementById("current-weather").textContent = weatherInfo;
    })
    .catch(error => console.error("Error fetching weather data:", error));

// Current Time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("current-time").textContent = `Time: ${timeString}`;
}
setInterval(updateTime, 1000);

// News Feed (Example Data)
const newsContainer = document.getElementById("news-container");
const newsData = [
    { title: "NDS1 Progress Report Released", date: "2023-10-01" },
    { title: "New Agricultural Initiatives Under TSP", date: "2023-09-28" },
    { title: "NDS2 Focus Areas Announced", date: "2023-09-25" },
];

newsData.forEach(news => {
    const article = document.createElement("div");
    article.className = "card";
    article.innerHTML = `<h3>${news.title}</h3><p>Date: ${news.date}</p>`;
    newsContainer.appendChild(article);
});

document.getElementById("feedback-form").addEventListener("submit", async function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  try {
      const response = await fetch("http://localhost:5000/api/feedback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
      });
      const result = await response.json();
      alert(result.message);
      this.reset();
  } catch (error) {
      alert("Failed to submit feedback. Please try again.");
  }
});
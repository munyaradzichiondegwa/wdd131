// Hero Banner Slideshow
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll(".slideshow img");
    slides.forEach(slide => (slide.style.display = "none"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
}
setInterval(showSlides, 3000);

// Interactive Map
const map = L.map('map').setView([-17.824858, 31.053028], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);
L.marker([-17.824858, 31.053028]).addTo(map)
    .bindPopup('Harare - Major Projects Hub')
    .openPopup();

  // Smooth Scroll for Navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        const target = document.querySelector(e.target.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

const express = require('express');
const mysql = require('mysql');
const app = express();

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'vision2030'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});

// API endpoint to fetch projects
app.get('/api/projects', (req, res) => {
    const query = 'SELECT * FROM projects';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// API endpoint to fetch news
app.get('/api/news', (req, res) => {
    const query = 'SELECT * FROM news ORDER BY date_published DESC';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Fetch projects from the API
async function loadProjects() {
    try {
        const response = await fetch('http://localhost:3000/api/projects');
        const projects = await response.json();
        const projectsContainer = document.getElementById('projects-container');
        
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p><strong>Category:</strong> ${project.category}</p>
                <p>${project.description}</p>
                <p><strong>Status:</strong> ${project.status}</p>
                <p><strong>Region:</strong> ${project.region}</p>
            `;
            projectsContainer.appendChild(projectElement);
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

// Call the function on page load
loadProjects();

// Fetch news articles from the API
async function loadNews() {
    try {
        const response = await fetch('http://localhost:3000/api/news');
        const newsList = await response.json();
        const newsContainer = document.getElementById('news-container');

        newsList.forEach(article => {
            const newsElement = document.createElement('div');
            newsElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.content.substring(0, 100)}... <a href="#">Read More</a></p>
                <p><strong>Published on:</strong> ${article.date_published}</p>
            `;
            newsContainer.appendChild(newsElement);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Call the function on page load
loadNews();

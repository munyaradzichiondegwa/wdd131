// Copyright Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('show');
        hamburgerMenu.innerHTML = nav.classList.contains('show') ? '&times;' : '&#9776;';
    });
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 68000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-exterior.jpg"
    },
    {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg, South Africa",
      dedicated: "1985, August, 24",
      area: 9000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-exterior.jpg"
    },
    {
      templeName: "Paris France",
      location: "Paris, France",
      dedicated: "2017, May, 21",
      area: 44000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior.jpg"
    }
  ];

  function createTempleCards(temples) {
    const templeGrid = document.querySelector('.temple-grid');
  
    temples.forEach((temple) => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      const figcaption = document.createElement('figcaption');
  
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = "lazy";
      figcaption.textContent = `${temple.templeName}, ${temple.location} - Dedicated: ${temple.dedicated} - Area: ${temple.area} sqft`;
  
      figure.appendChild(img);
      figure.appendChild(figcaption);
      templeGrid.appendChild(figure);
    });
  }
  
  function filterTemples(criteria) {
    let filteredTemples;
  
    switch (criteria) {
      case 'old':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        break;
      case 'new':
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        break;
      case 'large':
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
      case 'small':
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
      default:
        filteredTemples = temples;
        break;
    }
  
    document.querySelector('.temple-grid').innerHTML = '';
    createTempleCards(filteredTemples);
  }
  
  document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      const criteria = e.target.textContent.toLowerCase();
      filterTemples(criteria);
    }
  });
  
  createTempleCards(temples);
  
  // Copyright Year
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Last Modified Date
  document.getElementById('lastModified').textContent = document.lastModified;
  
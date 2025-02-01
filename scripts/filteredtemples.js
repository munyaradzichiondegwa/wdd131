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
      templeName: "Bountiful Utah",
      location: "Bountiful, Utah, United States",
      dedicated: "1995, January, 8",
      area: 81216,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-utah-temple-exterior-5.jpg"
    },
    {
      templeName: "Nauvoo Illinois",
      location: "Nauvoo, Illinois, United States",
      dedicated: "2002, June, 27",
      area: 54000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-illinois-temple-exterior-1.jpg"
    }
  ];
  
  const templesContainer = document.getElementById('temple-container');
  const allTemplesLink = document.getElementById('all-temples');
  const oldTemplesLink = document.getElementById('old-temples');
  const newTemplesLink = document.getElementById('new-temples');
  const largeTemplesLink = document.getElementById('large-temples');
  const smallTemplesLink = document.getElementById('small-temples');
  
  const currentYear = new Date().getFullYear();
  document.getElementById('copyright-year').textContent = currentYear;
  document.getElementById('last-modified-date').textContent = new Date(document.lastModified).toLocaleString();
  
  function createTempleCard(temple) {
    const card = document.createElement('div');
    card.classList.add('temple-card');
  
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';
    card.appendChild(img);
  
    const name = document.createElement('h3');
    name.textContent = temple.templeName;
    card.appendChild(name);
  
    const location = document.createElement('p');
    location.textContent = temple.location;
    card.appendChild(location);
  
    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(dedicated);
  
    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq ft`;
    card.appendChild(area);
  
    return card;
  }
  
  function renderTemples(temples) {
    templesContainer.innerHTML = '';
    temples.forEach(temple => {
      const card = createTempleCard(temple);
      templesContainer.appendChild(card);
    });
  }
  
  function filterTemples(filter) {
    let filteredTemples = [...temples];
  
    switch (filter) {
      case 'old':
        filteredTemples = filteredTemples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        break;
      case 'new':
        filteredTemples = filteredTemples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        break;
      case 'large':
        filteredTemples = filteredTemples.filter(temple => temple.area > 90000);
        break;
      case 'small':
        filteredTemples = filteredTemples.filter(temple => temple.area < 10000);
        break;
      default:
        filteredTemples = [...temples];
    }
  
    renderTemples(filteredTemples);
  }
  
  allTemplesLink.addEventListener('click', () => filterTemples());
  oldTemplesLink.addEventListener('click', () => filterTemples('old'));
  newTemplesLink.addEventListener('click', () => filterTemples('new'));
  largeTemplesLink.addEventListener('click', () => filterTemples('large'));
  smallTemplesLink.addEventListener('click', () => filterTemples('small'));
  
  renderTemples(temples);
// vision.js - Updated Core Implementation

class CoreInitializer {
  constructor() {
      this.initializeDate();
      this.initializeWeather();
      this.setupDynamicContent();
      this.initializeHeroBanner();
      this.setupGlobalListeners();
      this.initializeIntersectionObservers();
  }

  initializeDate() {
      const dateElement = document.getElementById('current-date');
      if (dateElement) {
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Africa/Harare' };
          dateElement.textContent = new Date().toLocaleDateString('en-ZW', options);
      }
  }

  async initializeWeather() {
      const weatherElement = document.getElementById('weather-info');
      if (weatherElement) {
          try {
              const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Harare&units=metric&appid=YOUR_API_KEY');
              const data = await response.json();
              weatherElement.innerHTML = `
                  <i class="fas fa-temperature-half"></i> ${Math.round(data.main.temp)}°C
                  <i class="fas fa-droplet"></i> ${data.main.humidity}%
                  ${data.weather[0].description}
              `;
          } catch (error) {
              weatherElement.innerHTML = "Weather data unavailable";
          }
      }
  }

  setupDynamicContent() {
      document.querySelectorAll('.dynamic-content').forEach(container => {
          const dataSrc = container.dataset.src;
          if (dataSrc) this.loadDynamicContent(container, dataSrc);
      });
  }

  async loadDynamicContent(container, url) {
      const loading = container.querySelector('.loading-overlay');
      try {
          loading.style.display = 'flex';
          const response = await fetch(url);
          const html = await response.text();
          container.innerHTML = html;
      } catch (error) {
          container.innerHTML = '<p>Error loading content</p>';
      } finally {
          loading.style.display = 'none';
      }
  }

  initializeHeroBanner() {
      const heroBanner = document.querySelector('.hero-banner');
      if (heroBanner) {
          new HeroBannerCarousel('.hero-slide').init();
          this.initializeParallax(heroBanner);
      }
  }

  initializeParallax(heroBanner) {
      window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;
          heroBanner.style.backgroundPositionY = `${scrolled * 0.5}px`;
      });
  }

  setupGlobalListeners() {
      // Strategy Table Print
      const printManager = new PrintManager();
      
      // Bootstrap Tooltips
      const tooltipTriggerList = [...document.querySelectorAll('[data-bs-toggle="tooltip"]')];
      tooltipTriggerList.forEach(tooltipTriggerEl => {
          new bootstrap.Tooltip(tooltipTriggerEl, { boundary: 'window' });
      });
  }

  initializeIntersectionObservers() {
      new ScrollAnimator();  // Handle progress bars and animations
  }
}

class ScrollAnimator {
  constructor() {
      this.initializeIntersectionObservers();
      this.setupTabTransitions();
  }

  initializeIntersectionObservers() {
      const options = { threshold: 0.8 };
      
      // Progress Bars
      const progressObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const progressBar = entry.target;
                  const targetWidth = progressBar.getAttribute('aria-valuenow') + '%';
                  progressBar.style.width = targetWidth;
              }
          });
      }, options);

      document.querySelectorAll('.progress-bar').forEach(bar => {
          progressObserver.observe(bar);
      });

      // Animated Elements
      const animationObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) entry.target.classList.add('visible');
          });
      }, { threshold: 0.15 });

      document.querySelectorAll('.animate-on-scroll').forEach(el => {
          animationObserver.observe(el);
      });
  }

  setupTabTransitions() {
      const tabLinks = document.querySelectorAll('[data-bs-toggle="tab"]');
      tabLinks.forEach(link => {
          link.addEventListener('shown.bs.tab', (e) => {
              const targetContent = document.querySelector(e.target.getAttribute('data-bs-target'));
              targetContent.querySelectorAll('.animate-on-scroll').forEach(el => {
                  el.classList.add('visible');
              });
          });
      });
  }
}

class PrintManager {
  constructor() {
      this.initializePrintButtons();
  }

  initializePrintButtons() {
      document.querySelectorAll('.print-strategy').forEach(btn => {
          btn.addEventListener('click', (e) => this.handlePrint(e));
      });
  }

  handlePrint(e) {
      const table = e.target.closest('.table-responsive').querySelector('table');
      const win = window.open('');
      win.document.write(`
          <style>
              table { border-collapse: collapse; width: 100%; }
              th, td { padding: 0.75rem; border: 1px solid #dee2e6; }
              th { background-color: #006b3f; color: white; }
              tr:nth-child(even) { background-color: #f8f9fa; }
          </style>
          ${table.outerHTML}
      `);
      win.print();
      win.close();
  }
}

class MediaManager {
  // (No changes needed if still on the same handling of media)
  constructor() {
      this.mediaContainers = document.querySelectorAll('.media-gallery');
      if (this.mediaContainers.length) this.init();
  }

  init() {
      this.mediaContainers.forEach(container => {
          this.lazyLoadMedia(container);
          this.setupLightbox(container);
      });
  }

  lazyLoadMedia(container) {
    // Same as previous implementation
  }

  setupLightbox(container) {
    // Same as previous implementation
  }

  createMediaCard(mediaData) {
    // Same as previous implementation
  }
}

// Main Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all core functionality
  new CoreInitializer();
  new MediaManager(); // Assuming this is still required.
  
  // Agriculture Page Specific Fixes
  if (document.body.classList.contains('agriculture-page')) {
      const agriProgressBars = document.querySelectorAll('.agriculture-progress');
      agriProgressBars.forEach(bar => {
          bar.style.transition = 'width 1.5s ease-in-out';
      });
  }
});
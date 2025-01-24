// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    return windSpeed > 3 && temperature <= 50 
        ? (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))).toFixed(1)
        : "N/A";
}

// Set current year and last modified date
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;

    // Wind chill calculation with static values
    const temperature = 28;  // °C
    const windSpeed = 6;     // km/h
    const windChillElement = document.getElementById('windChill');
    
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
});
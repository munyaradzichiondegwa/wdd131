// Get current year for footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Get last modified date for footer
document.getElementById('lastModified').textContent = document.lastModified;

// Calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Convert temperature to Fahrenheit for the calculation
    const tempF = (temperature * 9/5) + 32;
    const windSpeedMph = windSpeed * 0.621371; // Convert km/h to mph

    // Check if the input values meet the specification limits
    if (tempF <= 50 && windSpeedMph > 3) {
        // Calculate wind chill using the formula
        const windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeedMph, 0.16)) + (0.4275 * tempF * Math.pow(windSpeedMph, 0.16));
        // Convert back to Celsius
        return ((windChill - 32) * 5/9).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

// Get the temperature and wind speed values
const temperature = parseFloat(document.getElementById('temperature').textContent);
const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

// Calculate and display the wind chill
document.getElementById('windChill').textContent = calculateWindChill(temperature, windSpeed);
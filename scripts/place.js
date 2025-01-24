document.addEventListener('DOMContentLoaded', function() {
    // Current Year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Last Modified
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;

    // Wind Chill Calculation
    const temperature = 28; // °C
    const windSpeed = 5; // km/h

    const windChillSpan = document.getElementById('windChill');
    windChillSpan.textContent = calculateWindChill(temperature, windSpeed);
});

function calculateWindChill(temp, windSpeed) {
    // Wind Chill Formula for Metric (Celsius)
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16))).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}
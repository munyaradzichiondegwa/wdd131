// Dynamically set the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Populate last modified date
document.getElementById('lastModified').textContent = 'Last Modification: ' + document.lastModified;

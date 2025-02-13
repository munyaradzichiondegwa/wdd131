// scripts/project.js
const gardenList = document.getElementById('gardenList');
const newGardenForm = document.getElementById('newGardenForm');
const messageDiv = document.getElementById('message');
const lastModifiedSpan = document.getElementById('lastModified'); // Get the span for the date

const gardens = loadGardensFromLocalStorage();

const initialGardens = [
    // ... (your initial garden data)
];

initialGardens.forEach(garden => {
    if (!gardens.find(g => g.name === garden.name)) {
        gardens.push(garden);
    }
});

saveGardensToLocalStorage(gardens);
displayGardens(gardens);
updateLastModifiedDate(); // Call the function to set the initial date


newGardenForm.addEventListener('submit', (event) => {
    // ... (your form submission handling)

    saveGardensToLocalStorage(gardens); // Save after adding a new garden
    displayGardens(gardens); // Redisplay the updated list
    updateLastModifiedDate(); // Update the last modified date
});



function displayGardens(gardens) {
    // ... (your displayGardens function)
}

function loadGardensFromLocalStorage() {
    // ... (your loadGardensFromLocalStorage function)
}

function saveGardensToLocalStorage(gardens) {
    // ... (your saveGardensToLocalStorage function)
}

function showMessage(message, type = "success") {
    // ... (your showMessage function)
}

function updateLastModifiedDate() {
    const lastModified = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    lastModifiedSpan.textContent = lastModified.toLocaleDateString(undefined, options); // Format the date
}
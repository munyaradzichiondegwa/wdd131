document.addEventListener("DOMContentLoaded", function () {
    const gardens = [
        { name: "Garden A", link: "gardens.html", image: "images/garden-a.jpg" },
        { name: "Garden B", link: "gardens.html", image: "images/garden-b.jpg" },
        { name: "Garden C", link: "gardens.html", image: "images/garden-c.jpg" }
    ];

    const gardensList = document.getElementById("gardens-list");

    gardens.forEach(garden => {
        const listItem = document.createElement("li");
        const gardenLink = document.createElement("a");
        const gardenImage = document.createElement("img");

        gardenLink.href = garden.link;
        gardenLink.textContent = garden.name;
        gardenImage.src = garden.image;
        gardenImage.alt = garden.name;
        gardenImage.loading = "lazy"; // Lazy loading the images

        listItem.appendChild(gardenImage);
        listItem.appendChild(gardenLink);
        gardensList.appendChild(listItem);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const gardens = [
        {
            name: "Green Haven Garden",
            location: "123 Green St, Cityville",
            description: "A thriving organic vegetable garden maintained by the local community.",
            image: "images/garden-a.jpg"
        },
        {
            name: "Pollinator Paradise",
            location: "45 Nature Rd, EcoTown",
            description: "A beautiful flower garden supporting bees and butterflies.",
            image: "images/garden-b.jpg"
        },
        {
            name: "Urban Oasis Garden",
            location: "78 Community Ave, MetroCity",
            description: "An urban garden designed for local schools and community workshops.",
            image: "images/garden-c.jpg"
        }
    ];

    const gardensContainer = document.getElementById("gardens-container");

    if (gardensContainer) {
        gardens.forEach(garden => {
            const gardenCard = document.createElement("div");
            gardenCard.classList.add("garden-card");

            const gardenImage = document.createElement("img");
            gardenImage.src = garden.image;
            gardenImage.alt = garden.name;
            gardenImage.loading = "lazy";

            const gardenName = document.createElement("h3");
            gardenName.textContent = garden.name;

            const gardenLocation = document.createElement("p");
            gardenLocation.innerHTML = `<strong>Location:</strong> ${garden.location}`;

            const gardenDescription = document.createElement("p");
            gardenDescription.textContent = garden.description;

            gardenCard.appendChild(gardenImage);
            gardenCard.appendChild(gardenName);
            gardenCard.appendChild(gardenLocation);
            gardenCard.appendChild(gardenDescription);

            gardensContainer.appendChild(gardenCard);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const events = [
        {
            title: "Spring Planting Workshop",
            date: "March 15, 2025",
            location: "Green Haven Garden, Cityville",
            description: "Join us for a hands-on planting workshop where you'll learn how to grow vegetables and herbs for the season.",
            image: "images/event1.jpg"
        },
        {
            title: "Pollinator Garden Tour",
            date: "April 10, 2025",
            location: "Pollinator Paradise, EcoTown",
            description: "Explore the importance of pollinators and how our community garden supports bees and butterflies.",
            image: "images/event2.jpg"
        },
        {
            title: "Composting for Beginners",
            date: "May 5, 2025",
            location: "Urban Oasis Garden, MetroCity",
            description: "Discover the benefits of composting and learn how to create nutrient-rich soil for your garden.",
            image: "images/event3.jpg"
        }
    ];

    const eventsContainer = document.getElementById("events-container");

    if (eventsContainer) {
        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("event-card");

            const eventImage = document.createElement("img");
            eventImage.src = event.image;
            eventImage.alt = event.title;
            eventImage.loading = "lazy";

            const eventTitle = document.createElement("h3");
            eventTitle.textContent = event.title;

            const eventDate = document.createElement("p");
            eventDate.innerHTML = `<strong>Date:</strong> ${event.date}`;

            const eventLocation = document.createElement("p");
            eventLocation.innerHTML = `<strong>Location:</strong> ${event.location}`;

            const eventDescription = document.createElement("p");
            eventDescription.textContent = event.description;

            eventCard.appendChild(eventImage);
            eventCard.appendChild(eventTitle);
            eventCard.appendChild(eventDate);
            eventCard.appendChild(eventLocation);
            eventCard.appendChild(eventDescription);

            eventsContainer.appendChild(eventCard);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const resources = [
        {
            title: "Getting Started with Community Gardening",
            author: "GreenThumb Initiative",
            link: "https://www.example.com/community-gardening-guide",
            description: "Learn the basics of starting a community garden, from selecting a site to organizing volunteers.",
            image: "images/resource1.jpg"
        },
        {
            title: "Composting 101: Turning Waste into Gold",
            author: "Sustainable Living Hub",
            link: "https://www.example.com/composting-guide",
            description: "Discover how to create nutrient-rich compost for your garden using food scraps and yard waste.",
            image: "images/resource2.jpg"
        },
        {
            title: "Urban Gardening: Growing Food in Small Spaces",
            author: "Urban Green Spaces",
            link: "https://www.example.com/urban-gardening",
            description: "Maximize your small space for gardening, whether on a balcony, rooftop, or small backyard.",
            image: "images/resource3.jpg"
        }
    ];

    const resourcesContainer = document.getElementById("resources-container");

    if (resourcesContainer) {
        resources.forEach(resource => {
            const resourceCard = document.createElement("div");
            resourceCard.classList.add("resource-card");

            const resourceImage = document.createElement("img");
            resourceImage.src = resource.image;
            resourceImage.alt = resource.title;
            resourceImage.loading = "lazy";

            const resourceTitle = document.createElement("h3");
            resourceTitle.textContent = resource.title;

            const resourceAuthor = document.createElement("p");
            resourceAuthor.innerHTML = `<strong>Author:</strong> ${resource.author}`;

            const resourceDescription = document.createElement("p");
            resourceDescription.textContent = resource.description;

            const resourceLink = document.createElement("a");
            resourceLink.href = resource.link;
            resourceLink.target = "_blank";
            resourceLink.textContent = "Read More";

            resourceCard.appendChild(resourceImage);
            resourceCard.appendChild(resourceTitle);
            resourceCard.appendChild(resourceAuthor);
            resourceCard.appendChild(resourceDescription);
            resourceCard.appendChild(resourceLink);

            resourcesContainer.appendChild(resourceCard);
        });
    }
});

function showForm(type) {
    const formSection = document.getElementById("form-section");
    const formTitle = document.getElementById("form-title");
    const involvementForm = document.getElementById("involvement-form");

    // Set the form title based on the type of involvement
    if (type === "volunteer") {
        formTitle.textContent = "Volunteer Sign-Up";
    } else if (type === "donate") {
        formTitle.textContent = "Donation Form";
    } else if (type === "start") {
        formTitle.textContent = "Start a Garden Inquiry";
    }

    // Reset form fields
    involvementForm.reset();

    // Show the form section
    formSection.style.display = "block";
}

function hideForm() {
    document.getElementById("form-section").style.display = "none";
}

// Form submission logic
document.getElementById("involvement-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    alert("Thank you for getting involved! We will contact you soon.");
    hideForm();
});

// Dynamically set the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Populate last modified date
document.getElementById('lastModified').textContent = 'Last Modification: ' + document.lastModified;
// Dynamically set the current year
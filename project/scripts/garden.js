
document.addEventListener("DOMContentLoaded", function () {
    // Gardens list
    const initialGardens = [
        { name: "Garden A", link: "gardens.html", image: "images/garden-a.jpg" },
        { name: "Garden B", link: "gardens.html", image: "images/garden-b.jpg" },
        { name: "Garden C", link: "gardens.html", image: "images/garden-c.jpg" }
    ];

    const gardensList = document.getElementById("gardens-list");

    if (gardensList) {
        initialGardens.forEach(garden => {
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
    }

    // Render gardens when the page loads
    // document.addEventListener('DOMContentLoaded', renderGardens);
    // Hamburger menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Last modified date
    const lastModified = document.lastModified;
    const footer = document.querySelector("footer");

    if (footer) {
        const modifiedPara = document.createElement("p");
        modifiedPara.textContent = `Last Modified: ${lastModified}`;
        footer.appendChild(modifiedPara);
    }

    // Gardens container
    const detailedGardens = [
        {
            name: "Green Haven Garden",
            location: "30 Braemar St, Mt. Pleasant, Harare",
            description: "A thriving organic vegetable garden maintained by the local community.",
            image: "images/garden-a.jpg"
        },
        {
            name: "Pollinator Paradise",
            location: "18 Margaret Windsor Rd, Marlbrough, Harare",
            description: "A beautiful flower garden supporting bees and butterflies.",
            image: "images/garden-b.jpg"
        },
        {
            name: "Urban Oasis Garden",
            location: "13 McGhlery Rd, Milton Park, Harare",
            description: "An urban garden designed for local schools and community workshops.",
            image: "images/garden-c.jpg"
        }
    ];

    const gardensContainer = document.getElementById("gardens-container");

    if (gardensContainer) {
        detailedGardens.forEach(garden => {
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

    // Events container
    const events = [
        {
            title: "Spring Planting Workshop",
            date: "March 15, 2025",
            location: "Green Haven Garden, Mt. Pleasant, Harare",
            description: "Join us for a hands-on planting workshop where you'll learn how to grow vegetables and herbs for the season.",
            image: "images/event1.jpg"
        },
        {
            title: "Pollinator Garden Tour",
            date: "April 10, 2025",
            location: "Pollinator Paradise, Marlbrough, Harare",
            description: "Explore the importance of pollinators and how our community garden supports bees and butterflies.",
            image: "images/event2.jpg"
        },
        {
            title: "Composting for Beginners",
            date: "May 5, 2025",
            location: "Urban Oasis Garden, Milton Park, Harare",
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

    // Resources container
    const resources = [
        {
            title: "Getting Started with Community Gardening",
            author: "Rachel Surls, UCCE Master Gardener",
            link: "https://www.aces.edu/blog/topics/business-community-urban/a-guide-to-starting-a-community-garden/",
            description: "Learn the basics of starting a community garden, from selecting a site to organizing volunteers.",
            image: "images/resource1.jpg"
        },
        {
            title: "Composting 101: Turning Waste into Gold",
            author: " Ryan Dorn, SouthernSeeds.com",
            link: "https://southernseeds.com/blogs/news/composting-101-turning-waste-into-garden-gold#:~:text=Layer%20Your%20Compost%3A%20Begin%20by,ratio%20of%20browns%20to%20greens.",
            description: "Discover how to create nutrient-rich compost for your garden using food scraps and yard waste.",
            image: "images/resource2.jpg"
        },
        {
            title: "Urban Gardening: Growing Food in Small Spaces",
            author: "Chelsea Green",
            link: "https://www.chelseagreen.com/2023/how-much-food-can-be-grown-in-a-small-space/?srsltid=AfmBOoqySbqI0O72fOZGEr_Fczz-yG2NqWKZKyZZM0xA9b_BmU_lnmQv",
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
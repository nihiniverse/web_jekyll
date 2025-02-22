// Array of JSON file paths
const jsonFiles = [
    '/data/json/gallery/adobe.json',
    '/data/json/gallery/pixabay.json'
];

const gallery = document.getElementById('gallery');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const currentPageDisplay = document.getElementById('currentPageDisplay');
const itemsPerPageSelect = document.getElementById('itemsPerPageSelect');

let allItems = []; // To store all gallery items
let itemsPerPage = 20; // Default items per page
let currentPage = 1; // Track the current page

// Load all gallery items from JSON files
const loadGallery = () => {
    Promise.all(jsonFiles.map(file => fetch(location.origin + file).then(response => response.json())))
        .then(results => {
            allItems = results.flat(); // Combine all items into one array
            displayGallery(); // Initially display the gallery
        })
        .catch(error => console.error('Error loading JSON files:', error));
};

// Display the gallery based on current page and items per page
const displayGallery = () => {
    gallery.innerHTML = ''; // Clear previous items
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToDisplay = allItems.slice(start, end); // Get the items for the current page

    itemsToDisplay.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = item.pre_link; // Link to the image
        img.alt = item.Title; // Alternate text

        const link = document.createElement('a');
        link.href = item.link;
        link.target = '_blank'; // Open in a new tab
        link.appendChild(img);
        galleryItem.appendChild(link);

        gallery.appendChild(galleryItem);
    });

    // Update the state of the pagination buttons
    prevPageButton.disabled = currentPage === 1; // Disable "Previous" on first page
    nextPageButton.disabled = end >= allItems.length; // Disable "Next" if on the last page

    // Update the current page display
    currentPageDisplay.textContent = `Page ${currentPage}`;
};

// Confirm the number of items per page from the dropdown
const confirmItemsPerPage = () => {
    itemsPerPage = parseInt(itemsPerPageSelect.value, 10); // Get the selected value
    currentPage = 1; // Reset to first page
    displayGallery(); // Refresh the display
};

// Change the current page by a specified amount
const changePage = (direction) => {
    currentPage += direction; // Increment or decrement the current page
    displayGallery(); // Refresh the display
};

loadGallery(); // Load the gallery initially
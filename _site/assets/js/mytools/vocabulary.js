let data = []; // Initialize an empty array for data

// Function to fetch the JSON data
function fetchData() {
    return fetch(location.origin + '/data/json/vocabulary.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
        })
        .then(jsonData => {
            data = jsonData; // Assign the fetched data to the global variable
            console.log(data); // Log the data after it has been fetched
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
}

// Function to build the tree structure
function buildTree(data) {
    const tree = {};
    data.forEach(item => {
        if (!tree[item.parent]) {
            tree[item.parent] = [];
        }
        tree[item.parent].push(item.word);
    });
    return tree;
}

// Function to create and display the word tree
function displayTree(parent, tree, level = 0) {
    let html = ""; // Use a string to build the HTML

    const words = tree[parent] || [];
    words.forEach(word => {
        // Use different classes based on the level
        html += `<div class="word-container">
                    <span class="level-${level}">${word}</span>`; // Assign class based on level
        
        const children = displayTree(word, tree, level + 1); // Increment level for children
        
        if (children) { // Only add a button if children exist
            html += `<button class="toggle-button">+</button>
                      <div class="children" style="display: none;">${children}</div>`; // Initially hide children
        }
        
        html += `</div>`; // Close word container
    });

    return html; // Return the generated HTML
}

// Function to toggle children visibility and button text
function toggleChildren(event) {
    const childrenContainer = event.target.parentElement.querySelector('.children');
    if (childrenContainer) {
        // Toggle display between 'none' and 'block'
        childrenContainer.style.display = childrenContainer.style.display === 'none' ? 'block' : 'none';
        
        // Toggle button text
        event.target.textContent = childrenContainer.style.display === 'block' ? '-' : '+';
    }
}

// Build and display the tree
// Fetch the data and then build the tree
fetchData().then(() => {
    const tree = buildTree(data); // Now data is populated
    document.getElementById('wordTree').innerHTML = displayTree("", tree);
    // Add click event listeners to buttons
    document.querySelectorAll('.toggle-button').forEach(buttonElement => {
        buttonElement.addEventListener('click', toggleChildren);
    });
    console.log(tree); // Log the tree structure
});



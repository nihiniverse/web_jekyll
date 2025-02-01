// Assuming you have a JSON file named 'data.json' in the same directory
fetch(location.origin + "/data/json/gallary.json")
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById('gallery');

        data.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = item.pre_link; // Link to the image
            img.alt = item.Title; // Alternate text

            // Create a link to the original source
            const link = document.createElement('a');
            link.href = item.link;
            link.target = '_blank'; // Open in a new tab
            link.appendChild(img);
            galleryItem.appendChild(link);

            gallery.appendChild(galleryItem);
        });
    })
    .catch(error => console.error('Error loading the JSON file:', error));
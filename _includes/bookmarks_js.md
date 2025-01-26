<script>
document.addEventListener("DOMContentLoaded", () => {
    fetch(location.origin + '/data/json/bookmarks.json')
        .then(response => response.json())
        .then(data => {
            displayCategories(data);
        });

    function displayCategories(bookmarks) {
        const categories = {};
        const catdiv = document.getElementById('categories');
        const catdivs = {};
        const buttons = {};

        // Organize bookmarks into categories
        bookmarks.forEach(bookmark => {
            if (!categories[bookmark.Cat1]) {
                categories[bookmark.Cat1] = {};
                catdivs[bookmark.Cat1] = {};
                buttons[bookmark.Cat1] = {};
            }
            if (bookmark.Cat2) {
                if (!categories[bookmark.Cat1][bookmark.Cat2]) {
                    categories[bookmark.Cat1][bookmark.Cat2] = [];
                    catdivs[bookmark.Cat1][bookmark.Cat2] = [];
                    buttons[bookmark.Cat1][bookmark.Cat2] = [];
                }
                categories[bookmark.Cat1][bookmark.Cat2].push(bookmark);
            }
            else {
                if (!categories[bookmark.Cat1]['bookmarks']) {
                    categories[bookmark.Cat1]['bookmarks'] = [];
                }
                categories[bookmark.Cat1]['bookmarks'].push(bookmark);
            }
            // if (bookmark.Cat3) {
            //     if (!categories[bookmark.Cat1][bookmark.Cat2][bookmark.Cat3]) {
            //         categories[bookmark.Cat1][bookmark.Cat2][bookmark.Cat3] = [];
            //         catdivs[bookmark.Cat1][bookmark.Cat2][bookmark.Cat3] = [];
            //         buttons[bookmark.Cat1][bookmark.Cat2][bookmark.Cat3] = [];
            //     }
            //     categories[bookmark.Cat1][bookmark.Cat2][bookmark.Cat3].push(bookmark);
            // }
            // else {
            //     if (!categories[bookmark.Cat1][bookmark.Cat2]['bookmarks']) {
            //         categories[bookmark.Cat1][bookmark.Cat2]['bookmarks'] = [];
            //     }
            //     categories[bookmark.Cat1][bookmark.Cat2]['bookmarks'].push(bookmark);
            // }
        });

        // Create category elements
        for (let cat1 in categories) {
            catdivs[cat1] = document.createElement('div');
            catdivs[cat1].textContent = cat1;
            catdivs[cat1].className = 'cat1 collapse';
            buttons[cat1] = document.createElement('button');
            buttons[cat1].className = 'bbtn bcat1';
            buttons[cat1].textContent = "+";
            catdivs[cat1].appendChild(buttons[cat1]);
            catdiv.appendChild(catdivs[cat1]);
            buttons[cat1].addEventListener('click', () => togglecat(catdivs[cat1],buttons[cat1], 1));
            // Populate subcategories
            for (let cat2 in categories[cat1]) {
                if (cat2 != 'bookmarks'){
                    catdivs[cat1][cat2] = document.createElement('div');
                    catdivs[cat1][cat2].textContent = cat2;
                    catdivs[cat1][cat2].className = 'cat2 hidden collapse'; // Initially hidden
                    buttons[cat1][cat2] = document.createElement('button');
                    buttons[cat1][cat2].className = 'bbtn bcat2';
                    buttons[cat1][cat2].textContent = "+";
                    catdivs[cat1][cat2].appendChild(buttons[cat1][cat2]);
                    catdivs[cat1].appendChild(catdivs[cat1][cat2]);
                    buttons[cat1][cat2].addEventListener('click', () => togglecat(catdivs[cat1][cat2],buttons[cat1][cat2], 2));
                    for (let cat3 in categories[cat1][cat2]){
                    }
                    // Table
                    const table = document.createElement('table');
                    table.className = 'links3 bookmark_table hidden';
                    const thead = document.createElement('thead');
                    const tbody = document.createElement('tbody');
                    // Add table headers
                    const headerRow = document.createElement('tr');
                    const headerName = document.createElement('th');
                    const headerDescription = document.createElement('th');
                    headerName.textContent = 'Name';
                    headerDescription.textContent = 'Description';
                    headerRow.appendChild(headerName);
                    headerRow.appendChild(headerDescription);
                    thead.appendChild(headerRow);
                    table.appendChild(thead);
                    table.appendChild(tbody);
                    categories[cat1][cat2].forEach(bookmark => {
                        // Create a new row for each bookmark
                        const rowElement = document.createElement('tr');
                        // Create a cell for the bookmark link
                        const linkCell = document.createElement('td');
                        const link = document.createElement('a');
                        link.href = bookmark.url;
                        link.target = "_blank";
                        link.textContent = bookmark.name;
                        linkCell.appendChild(link); // Add link to the cell
                        rowElement.appendChild(linkCell); // Add cell to the row
                        // Create a cell for the bookmark description
                        const descriptionCell = document.createElement('td');
                        descriptionCell.textContent = bookmark.description; // Set the description text
                        rowElement.appendChild(descriptionCell); // Add description cell to the row
                        // Append the row to the table body
                        tbody.appendChild(rowElement);
                    });
                    catdivs[cat1][cat2].appendChild(table);
                }
            }
            if (categories[cat1]['bookmarks']){
                //Table
                const table = document.createElement('table');
                table.className = 'links2 bookmark_table hidden';
                const thead = document.createElement('thead');
                const tbody = document.createElement('tbody');
                // Add table headers
                const headerRow = document.createElement('tr');
                const headerName = document.createElement('th');
                const headerDescription = document.createElement('th');
                headerName.textContent = 'Name';
                headerDescription.textContent = 'Description';
                headerRow.appendChild(headerName);
                headerRow.appendChild(headerDescription);
                thead.appendChild(headerRow);
                table.appendChild(thead);
                table.appendChild(tbody);
                categories[cat1]['bookmarks'].forEach(bookmark => {
                    // Create a new row for each bookmark
                    const rowElement = document.createElement('tr');
                    // Create a cell for the bookmark link
                    const linkCell = document.createElement('td');
                    const link = document.createElement('a');
                    link.href = bookmark.url;
                    link.target = "_blank";
                    link.textContent = bookmark.name;
                    linkCell.appendChild(link); // Add link to the cell
                    rowElement.appendChild(linkCell); // Add cell to the row
                    // Create a cell for the bookmark description
                    const descriptionCell = document.createElement('td');
                    descriptionCell.textContent = bookmark.description; // Set the description text
                    rowElement.appendChild(descriptionCell); // Add description cell to the row
                    // Append the row to the table body
                    tbody.appendChild(rowElement);
                });
                catdivs[cat1].appendChild(table);
            }
        }
    }
    function togglecat(element, button, cat) {
        const allSubcategories = document.querySelectorAll('.cat' + String(cat + 1));
        const subDiv = element.querySelectorAll('.cat' + String(cat + 1));
        const allbuttons = document.querySelectorAll('.bcat' + String(cat));
        const allLinks_1 = document.querySelectorAll('.links' + String(cat));
        const allLinks = document.querySelectorAll('.links' + String(cat + 1));
        const thislinks = element.querySelectorAll('.links' + String(cat + 1));
        // Check if the current subcategory is hidden
        if (element.classList.contains('collapse')) {
            // Hide all other subcategories and links
            allSubcategories.forEach(subcategory => {
                if (!subcategory.classList.contains('hidden')){
                    subcategory.classList.add('hidden');
                }
            });
            allbuttons.forEach(button => {
                button.textContent = "+";
            });
            button.textContent = "–";
            allLinks.forEach(link => {
                if (!link.classList.contains('hidden')){
                    link.classList.add('hidden');
                }
            });
            // Show all subcategories this cat
            subDiv.forEach(subcategory => {
                subcategory.classList.remove('hidden');
                
            });
            thislinks.forEach(link => {
                link.classList.remove('hidden');
            });
            element.classList.remove('collapse');
        } else {
            // Hide the current subcategory
            button.textContent = "+";
            subDiv.forEach(subcategory => {
                subcategory.classList.add('hidden');
                button.textContent = "+";
            });
            thislinks.forEach(link => {
                link.classList.add('hidden');
            });
            element.classList.add('collapse');
        }
    }
});
</script>
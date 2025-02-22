---
layout: default
title: Nihiniverse - Gallery
permanant link: /pages/gallery.html
---
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/gallery.css">
<div class="section-container">
    <div class="tab-controls">
        <label for="itemsPerPageSelect">Images per page:</label>
        <select class = "styled-input" id="itemsPerPageSelect">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
        <button class = "btn" onclick="confirmItemsPerPage()">Confirm</button>
    </div>
    <div id="gallery" class="gallery"></div>
    <div class="pagination-controls">
        <button class = "btn" id="prevPage" onclick="changePage(-1)" disabled>Previous</button>
        <span class = "home-text2" id="currentPageDisplay">Page 1</span> <!-- Display for current page -->
        <button class = "btn" id="nextPage" onclick="changePage(1)">Next</button>
    </div>
    <script src="{{ site.baseurl }}/assets/js/gallery.js"></script>
</div>
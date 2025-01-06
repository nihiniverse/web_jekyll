<nav class="navigation-tools-nav navigation-linksroot-class-name1">
    <ul>
        {% assign types = "" %}
        {% for tool in site.data.tools %}
            {% unless types contains tool.type %}
                {% assign types = types | append: tool.type | append: "," %}
                <li class="Navigation-Link navigation-links-text1 {% if tool.type == current_page_type %}clicked-link{% endif %}">
                    <a href="{{ site.baseurl }}/pages/tools.html?type={{ tool.type | downcase }}" class="tool-type" data-type="{{ tool.type | downcase }}">{{ tool.type }} </a>
                </li>
            {% endunless %}
        {% endfor %}
    </ul>
</nav>
<h2 class = "title" id="tool-type-title">{{ default_type }}</h2>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const typeFromURL = urlParams.get('type') || "{{ default_type | downcase }}";
        const toolLinks = document.querySelectorAll('.tool-type');
        const toolsTable = document.getElementById('tools-table');
        const toolsRows = toolsTable.querySelectorAll('.tool-row');
        // Initially display only the default type tools
        toolsRows.forEach(row => {
            if (row.getAttribute('data-type') === typeFromURL) {
                row.style.display = ''; // Show the row
            } else {
                row.style.display = 'none'; // Hide the row
            }
        });
        // Highlight the default link
        toolLinks.forEach(link => {
            if (link.getAttribute('data-type') === typeFromURL) {
                link.classList.add('clicked-link'); // Add clicked-link class to the default type
            }
        });
       // Event listeners for tool links
        toolLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default anchor click behavior
                const selectedType = this.getAttribute('data-type');
                // Update the title
                document.getElementById('tool-type-title').textContent = this.textContent;
                // Show only the rows that match the selected type
                toolsRows.forEach(row => {
                    if (row.getAttribute('data-type') === selectedType) {
                        row.style.display = ''; // Show the row
                    } else {
                        row.style.display = 'none'; // Hide the row
                    }
                });
                // Remove active class from all links and add to the clicked link
                toolLinks.forEach(l => l.classList.remove('clicked-link'));
                this.classList.add('clicked-link');
                // Update the URL without refreshing the page
                window.history.pushState({}, '', `?type=${selectedType}`);
            });
        });
    });
</script>
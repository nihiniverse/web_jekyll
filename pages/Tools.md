---
layout: default
title: Tools
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}

<!-- Navigation for Tool Types -->
<div class="tools-container">
    <div class="home-max-width max-content-container">
        <nav class="navigation-tools-nav navigation-linksroot-class-name1">
            <ul>
                {% assign types = "" %}
                {% for tool in tools %}
                    {% unless types contains tool.type %}
                        {% assign types = types | append: tool.type | append: "," %}
                        <li class="Navigation-Link navigation-links-text1">
                            <a href="#" class="tool-type" data-type="{{ tool.type | downcase }}">{{ tool.type }}</a>
                        </li>
                    {% endunless %}
                {% endfor %}
            </ul>
        </nav>
<!-- Table for Tools -->
        <h2 id="tool-type-title">{{ default_type }}</h2>
        <table id="tools-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {% for tool in tools %}
                    <tr class="tool-row" data-type="{{ tool.type | downcase }}">
                        <td>{{ tool.name }}</td>
                        <td>{{ tool.description }}</td>
                        <td><a href="{{ tool.url }}">Go to Tool</a></td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
</div>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const toolLinks = document.querySelectorAll('.tool-type');
        const toolsTable = document.getElementById('tools-table');
        const toolsRows = toolsTable.querySelectorAll('.tool-row');

        // Initially display only the default type tools
        const defaultType = "{{ default_type | downcase }}";
        toolsRows.forEach(row => {
            if (row.getAttribute('data-type') === defaultType) {
                row.style.display = ''; // Show the row
            } else {
                row.style.display = 'none'; // Hide the row
            }
        });

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

                // If no rows match, you can optionally inform the user
                const noResults = Array.from(toolsRows).every(row => row.style.display === 'none');
                if (noResults) {
                    toolsTable.querySelector('tbody').innerHTML = '<tr><td colspan="3">No tools available for this type.</td></tr>';
                }
            });
        });
    });
</script>
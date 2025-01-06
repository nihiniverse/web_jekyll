---
layout: default
title: Tools
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}

<!-- Navigation for Tool Types -->
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=default_type %}
<!-- Table for Tools -->
        <table class = "table" id="tools-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {% for tool in tools %}
                    <tr class="tool-row" data-type="{{ tool.type | downcase }}">
                        <td><a href="{{ tool.url }}">{{ tool.name }}</a></td>
                        <td>{{ tool.description }}</td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
</div>
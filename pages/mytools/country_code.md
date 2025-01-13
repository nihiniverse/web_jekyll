---
layout: default
title: Nihiniverse - Country Code
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Others" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Country Code</span>
        <div>
        <table>
            <thead>
                <tr class = "font18">
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Alpha-2</th>
                    <th>Alpha-3</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/mytools/country_code.js"></script>

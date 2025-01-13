---
layout: default
title: Nihiniverse - Stop Watch
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Others" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Stop Watch</span>
        <input type="text" class = "time_display" id = "time_display" value="00:00:00" readonly>
        <br><br>
        <div class = "containers_center">
            <button class="toggle btn">Start</button>
            <button class="reset btn">Reset</button>
            <button class="copy btn">Copy</button>
        </div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/stopwatch.js"></script>
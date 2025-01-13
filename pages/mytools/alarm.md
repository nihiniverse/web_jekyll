---
layout: default
title: Nihiniverse - Alarm
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Others" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Alarm</span>
        <div class="containers_center">
            <div>
                <input type="time" id="alarmtime" required><br>
            </div>
            <div>
                <button class = "btn center" id="setbutton">Set Alarm</button>
            </div>
            <div id="message" class="containers_center"></div>
        </div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/alarm.js"></script>
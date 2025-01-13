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
        <span class="title-text1">Timer</span>
        <table class = 'table40 table'>
            <tr>
              <td class="left noborder"><label for="hours">Hours:</label></td>
              <td class="right noborder"><input class = "styled-input" type="number" id="hours" min="0" value="0"></td>
            </tr>
            <tr>
              <td class="left noborder"><label for="minutes">Minutes:</label></td>
              <td class="right noborder"><input class = "styled-input" type="number" id="minutes" min="0" value="0"></td>
            </tr>
            <tr>
              <td class="left noborder"><label for="seconds">Seconds:</label></td>
              <td class="right noborder"><input class = "styled-input" type="number" id="seconds" min="0" value="0"></td>
            </tr>
        </table>
        <div class="containers_center" id = "main">
            <div class="center">
                <p id="countdown"></p>
            </div>
            <div class="center">
                <button id="setbutton" class="btn center">Start</button>
            </div>
        </div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/counttime.js"></script>
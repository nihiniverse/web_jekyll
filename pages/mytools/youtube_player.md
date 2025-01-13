---
layout: default
title: Nihiniverse - Youtube Player
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Others" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Youtube Player</span>
          <table class = "table50 table">
            <tr>
              <td class="left"><label for="url">URL:</label></td>
              <td class="right"><input class = "styled-input" type="text" id="url" placeholder="Enter YouTube URL" required></td>
            </tr>
            <tr>
              <td class="left"><label for="aspectRatio">Aspect Ratio:</label></td>
              <td class="right">
                <input type="radio" id="aspectRatio" name="size">
                <label for="aspectRatio" style="margin-right: 10px;">16:9</label>
                <input type="radio" id="customSize" name="size" checked>
                <label for="customSize">Free Change</label>
              </td>
            </tr>
            <tr>
              <td class="left"><label for="width">Width:</label></td>
              <td class="right"><input class = "styled-input" type="number" id="width" placeholder="Enter width" required value="640"></td>
            </tr>
            <tr>
              <td class="left"><label for="height">Height:</label></td>
              <td class="right"><input class = "styled-input" type="number" id="height" placeholder="Enter height" required value="360"></td>
            </tr>
          </table>
        <button class = "btn " onclick="openPlayer()">Open Player</button>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/youtube_player.js"></script>
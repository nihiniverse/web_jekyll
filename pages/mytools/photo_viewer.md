---
layout: default
title: Nihiniverse - Photo Viewer
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Photo" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Photo Viewer</span>
        <table class = "table table_center noborder">
            <tr>
                <td class="right">
                    <input class = "styled-input" type="file" id="fileInput" multiple>
                </td>
            </tr>
            <tr>
                <td class="right">
                    <select class = "styled-input" id="sizeOptions" onchange="changeImageSize()">
                        <option value="default">Default</option>
                        <option value="fixHeight">Fix Height</option>
                        <option value="fixWidth">Fix Width</option>
                        <option value="original">Original</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="right">
                    <input class = "styled-input" type="number" id="fixHeightInput" value="500" onchange="changeImageSize()" style="display: none;">
                    <input class = "styled-input" type="number" id="fixWidthInput" value="800" onchange="changeImageSize()" style="display: none;">
                </td>
            </tr>
            <tr>
                <td class="right">
                    <button class="center btn" id="previousBtn" data-toggle="tooltip" data-placement="bottom" title="Left (←)" onclick="previousImage()">Previous</button>
                    <button class="center btn" id="loadBtn" data-toggle="tooltip" data-placement="bottom" title="Down (↓)" onclick="loadImages()">Load Images</button>
                    <button class="center btn" id="fullscreenButton">Fullscreen</button>
                    <button class="center btn" id="nextBtn" data-toggle="tooltip" data-placement="bottom" title="Right (→)" onclick="nextImage()">Next</button>
                </td>
            </tr>
        </table>
        <div id="gallery"></div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/photo/photo_viewer.js"></script>
---
layout: default
title: Nihiniverse - Arithmetic Generator I
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Text" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Photo Add Text</span>
        <div class="home-max-width max-content-container">
        <form>
            <label for="fileInput">Upload a photo:</label>
            <input type="file" id="fileInput" accept="image/*"><br>
            <label for="textInput">Enter the text to be added:</label>
            <textarea id="photo_add_textInput"></textarea>
            <label for="fontStyleInput">Choose Font Style:</label>
            <select class="browser-default" id="fontStyleInput">
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Verdana">Verdana</option>
                <option value="Georgia">Georgia</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Impact">Impact</option>
            </select>
            <label for="fontSizeInput">Choose Font Size:</label>
            <input type="number" id="fontSizeInput" min="1" max="500" value="100">
            <label for="colorInput">Text color:</label>
            <select class="browser-default" id="colorInput">
                <option value="custom">Others</option>
                <option value="#000000" style="background-color: #000000;">Black</option>
                <option value="#ffffff" style="background-color: #ffffff;">White</option>
                <option value="#ff0000" style="background-color: #ff0000;">Red</option>
                <option value="#ffa500" style="background-color: #ffa500;">Orange</option>
                <option value="#ffff00" style="background-color: #ffff00;">Yellow</option>
                <option value="#008000" style="background-color: #008000;">Dark Green</option>
                <option value="#008000" style="background-color: #00ff00;">Green</option>
                <option value="#0000ff" style="background-color: #0000ff;">Blue</option>
                <option value="#4b0082" style="background-color: #4b0082;">Indigo</option>
                <option value="#a0a0a0" style="background-color: #a0a0a0;">Grey</option>
            </select>
            <label for="customColorInput">Other Colors:</label>
            <input type="color" id="customColorInput" value="#ffffff"><br>
            <button class="btn blue" type="button" onclick="merge()">Merge</button>
        </form>
    </div>
    <br>
    <div class="photo_canvas_containers">
        <canvas class = "center" id="photo_canvas"></canvas>
    </div>
</div>

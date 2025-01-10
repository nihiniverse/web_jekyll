---
layout: default
title: Nihiniverse - Photo To IG
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Text" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Photo to IG</span>
        <table class = "table table_password noborder">
            <tr>
                <td class="right" colspan="2"><input type="file" id="uploadInput"></td>
            </tr>
            <tr>
                <td class = "left">
                    <label for="colorInput">Padding Color:</label>
                </td>
                <td class = "right">
                    <select class="styled-input" id="colorInput">
                        <option value="auto">Auto</option>
                        <option value="custom">Others</option>
                        <option value="#000000" style="background-color: #000000;">Black</option>
                        <option value="#ffffff" style="background-color: #ffffff;">White</option>
                        <option value="#ff0000" style="background-color: #ff0000;">Red</option>
                        <option value="#ffa500" style="background-color: #ffa500;">Orange</option>
                        <option value="#ffff00" style="background-color: #ffff00;">Yellow</option>
                        <option value="#008000" style="background-color: #008000;">Dark Green</option>
                        <option value="#00ff00" style="background-color: #00ff00;">Green</option>
                        <option value="#0000ff" style="background-color: #0000ff;">Blue</option>
                        <option value="#4b0082" style="background-color: #4b0082;">Indigo</option>
                        <option value="#a0a0a0" style="background-color: #a0a0a0;">Grey</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class = "left">
                    <label for="customColorInput">Other Colors:</label>
                </td>
                <td class = "right">
                    <input class = "styled-input" type="color" id="customColorInput" value="#ffffff">
                </td>
            </tr>
        </table>
        <div class="center">
            <canvas id="canvas"></canvas>
        </div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/photo/phototoig.js"></script>
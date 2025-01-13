---
layout: default
title: Nihiniverse - Cosmic Dodge
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Game" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/cosmic_dodge.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Cosmic Dodge</span>
        <div class="game-containers">
            <div id="timer" class="center">Time: <span id="elapsedTime">0</span> seconds</div>
            <div id="game-area" class="center">
            <div id="spaceship"></div>
        </div>
        <div class = "game-center">
            <button class = "btn center" id="start-button">Start Game</button>
        </div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/game/cosmic_dodge.js"></script>
---
layout: default
title: Nihiniverse - Snake
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Game" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">snake</span>
        <div class="game-containers">
            <div class = "game-center">
                <p id = "score">Score: 0</p>
            </div>
            <canvas id="gameCanvas" width="400" height="400"></canvas>
            <div class="game-center">
                <button type="button" class="btn center" id="startButton">Start Game</button>
            </div>
        </div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/game/snake.js"></script>
---
layout: default
title: Nihiniverse - Tetris
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Game" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/Tetris.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Tetris</span>
        <div class="game-containers">
            <div class = "game-center">
                <p id = "score">Score: 0</p>
            </div>
            <canvas id="tetrisCanvas" width="240" height="400"></canvas>
            <div class = "game-center">
                <button type="button" class="btn center" id="startButton">Start</button>
            </div>
        </div>
        <div id="reference">
            <p>Reference: <br>
            Tetris was created in 1985 by Alexey Pajitnov. https://en.wikipedia.org/wiki/Tetris
            </p>
        </div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/game/tetris.js"></script>
    
---
layout: default
title: Nihiniverse - Black Jack
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Game" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/blackjack.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Black Jack</span>
        <div class="game-containers2">
            <div id="dealer-hand" class="card-container center"></div>
            <p id="dealer-points" class = "points">Dealer's Points: </p>
            <p id="win_message"></p><br>
            <div id="player-hand" class="card-container center"></div>
            <p id="player-points" class = "points">Player's Points: </p>
            <div class = "game-center">
                <button class="btn center" id="start-button" onclick="startGame()">Start</button>
                <button class="btn center" id="hit-button" onclick="hit()">Hit</button>
                <button class="btn center" id="stand-button" onclick="stand()">Stand</button>
            </div>
        </div>
        <div id="reference">
            <p>Reference: <br>
            https://en.wikipedia.org/wiki/Blackjack
            </p>
        </div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/game/blackjack.js"></script>
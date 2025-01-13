---
layout: default
title: Nihiniverse - Step on Mines
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Game" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/steponmines.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Step on Mines</span>
        <div class="game-containers">
            <div id="gameboard"></div>
            <div>
                <button type="button" class="btn center" id="restartButton">Restart</button>
            </div>
        </div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/game/steponmines.js"></script>
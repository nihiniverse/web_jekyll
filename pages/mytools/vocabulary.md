---
layout: default
title: Nihiniverse - Vocabulary
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Text" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/vocabulary.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Vocabulary</span>
        <div class="containers_center">
            <div id="wordTree" class="word-tree">
            </div>
        </div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/vocabulary.js"></script>
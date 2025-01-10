---
layout: default
title: Nihiniverse - Text Editor
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Text" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
      <span class="title-text1">Text Editor</span>
      <div class="containers_center width60">
        <div class="headers-buttons">
            <button class="btn btn_s" id="new-tab">New Tab</button>
            <button class="btn btn_s" id="open-file">Open File</button>
            <button class="btn btn_s" id="save-file">Save File</button>
            <button class="btn btn_s" id="word-count-btn">Word Count</button>
        </div>
        <div class="tab active" id="tab1">
            <textarea class="text_area"></textarea>
        </div>
        <div class="tab-links">
            <button class="btn btn_s tab-link active" data-tab="tab1">Tab 1</button>
        </div>
        <div class = "left word-count" id="word-count">
            <p><span class="brown_bold">Word Counts</span></p>
            <p>Total Characters: <span class="brown_bold">0</span><br>No. of Digits: <span class="brown_bold">0</span><br>No. of Lines: <span class="brown_bold">1</span><br>
            No. of Chinese Characters: <span class="brown_bold">0</span> | No. of Chinese Punctuation: <span class="brown_bold">0</span><br>
            No. of English Characters: <span class="cbrown_bold">0</span> | No. of English Punctuation: <span class="brown_bold">0</span><br>
            No. of English Words: <span class="brown_bold">0</span> | No. of Byte Words: <span class="brown_bold">0</span></p>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/file-saver"></script>
<script src="{{ site.baseurl }}/assets/js/mytools/text_editor.js"></script>
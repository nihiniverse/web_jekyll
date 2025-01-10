---
layout: default
title: Nihiniverse - Word Counter
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Text" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Word Counter</span>
        <div class="containers_center width60">
            <textarea class="text_area" id="textArea" rows="10" cols="50"></textarea><br>
            <button class = "btn center" id="countWords" onclick="countWords()">Count Words</button>
            <table class="table noborder table_word_count">
                <tr>
                    <td class="left noborder">Total Words:</td>
                    <td class="right noborder"><span class="brown_bold" id="wordCount">0</span></td>
                </tr>
                <tr>
                    <td class="left noborder">Total Char:</td>
                    <td class="right noborder"><span class="brown_bold" id="charCount">0</span></td>
                </tr>
                <tr>
                    <td class="left noborder">Eng Char:</td>
                    <td class="right noborder"><span class="brown_bold" id="englishCharCount">0</span></td>
                </tr>
                <tr>
                    <td class="left noborder">Eng Punct:</td>
                    <td class="right noborder"><span class="brown_bold" id="englishPunctCount">0</span></td>
                </tr>
                <tr>
                    <td class="left noborder">Eng Words:</td>
                    <td class="right noborder"><span class="brown_bold" id="englishWordCount">0</span></td>
                </tr>
                <tr>
                    <td class="left noborder">Digits:</td>
                    <td class="right noborder"><span class="brown_bold" id="digitCount">0</span></td>
                </tr>
                <tr>
                    <td class="left noborder">Chi Char:</td>
                    <td class="right noborder"><span class="brown_bold" id="chineseCharCount">0</span></td>
                </tr>
                <tr>
                    <td class="left noborder">Chi Punct:</td>
                    <td class="right noborder"><span class="brown_bold" id="chinesePunctCount">0</span></td>
                </tr>
            </table>
            <div id="wordFrequency"></div>
        </div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/word_count.js"></script>

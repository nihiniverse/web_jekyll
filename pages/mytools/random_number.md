---
layout: default
title: Nihiniverse - Random Number
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Text" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Random Number</span>
        <table class = 'table table50 noborder'>
            <tr>
                <td class="left noborder"><label for="min">Min. Value:</label></td>
                <td class="right noborder"><input class = "styled-input2" type="number" id="min" name="min" value="0"></td>
            </tr>
            <tr>
                <td class="left noborder"><label for="max">Max. Value:</label></td>
                <td class="right noborder"><input class = "styled-input2" type="number" id="max" name="max" value="10"></td>
            </tr>
            <tr>
                <td class="left noborder"><label for="decimal-places">Decimal places:</label></td>
                <td class="right noborder"><input class = "styled-input2" type="number" id="decimal-places" name="decimal-places" value="0" min = "0" max = "10"></td>
            </tr>
        </table>
        <button type="button" class = "btn center" id="generate" onclick="generateRandomNumber()">Generate Number</button>
        <input class="center text-display" type="text" id="ran_num_output" readonly>
        <button type="button" class = "btn center" id="copy" onclick="copyPassword()">Copy to Clipboard</button>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/random_number.js"></script>
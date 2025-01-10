---
layout: default
title: Nihiniverse - Number Convertor
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Text" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Number Convertor</span>
        <table class = 'table table_password noborder'>
            <tr>
                <td class="left noborder"><label for="inputvalue">Input Value:</label></td>
                <td class="right noborder"><input class = "styled-input" type="text" id="inputvalue" value = 100></td>
            </tr>
            <tr>
                <td class="left noborder"><label class="left noborder" for="inputbase">Input Base:</label></td>
                <td class="right noborder"><select class="right noborder" id="inputbase">
                    <option value="2">Binary</option>
                    <option value="8">Octal</option>
                    <option value="10" selected>Decimal</option>
                    <option value="16">Hexadecimal</option>
                </select></td>
            </tr>
            <tr>
                <td class="left noborder"><label class="left noborder" for="outputbase">Output Base:</label></td>
                <td class="right noborder"><select class="right noborder" id="outputbase">
                    <option value="2" selected>Binary</option>
                    <option value="8">Octal</option>
                    <option value="10">Decimal</option>
                    <option value="16">Hexadecimal</option>
                </select></td>
            </tr>
	    </table>
        <button class = "btn center" id="convertbutton">Convert</button>
        <input type="text" class="password-display center" id="textoutput" readonly>
        <button type="button" class="btn center" id="copy" onclick="copyNumber()">Copy to Clipboard</button>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/number_convert.js"></script>
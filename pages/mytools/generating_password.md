---
layout: default
title: Nihiniverse - Generating Password
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Text" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
      <span class="title-text1">Password Generator</span>
        <table class = 'table table_password noborder'>
            <tr>
              <td class="left noborder"><label for="length">Password Length:</label></td>
              <td class="right noborder"><input class = "styled-input" type="number" id="length" name="length" min="8" max="128" value="22"></td>
            </tr>
            <tr>
              <td class="left noborder"><label for="uppercase">Include Uppercase Letters:</label></td>
              <td class="right noborder"><input type="checkbox" id="uppercase" name="uppercase" checked></td>
            </tr>
            <tr>
              <td class="left noborder"><label for="lowercase">Include Lowercase Letters:</label></td>
              <td class="right noborder"><input type="checkbox" id="lowercase" name="lowercase" checked></td>
            </tr>
            <tr>
              <td class="left noborder"><label for="numbers">Include Numbers:</label></td>
              <td class="right noborder"><input type="checkbox" id="numbers" name="numbers" checked></td>
            </tr>
            <tr>
              <td class="left noborder"><label for="symbols">Include Symbols:</label></td>
              <td class="right noborder"><input type="checkbox" id="symbols" name="symbols" checked></td>
            </tr>
            <tr>
              <td class="left noborder"><label for="exclude-similar">Exclude Similar Characters:</label></td>
              <td class="right noborder"><input type="checkbox" id="exclude-similar" name="exclude-similar" checked></td>
            </tr>
            <tr>
              <td class="left noborder"><label for="exclude-ambiguous">Exclude Ambiguous Characters:</label></td>
              <td class="right noborder"><input type="checkbox" id="exclude-ambiguous" name="exclude-ambiguous" checked></td>
            </tr>
        </table>
        <button type="button" class="btn center" onclick="generatePassword()">Generate Password</button>
        <input type="text" class="password-display center" id="textoutput" readonly>
        <button type="button" class="btn center" onclick="copyPassword()">Copy to Clipboard</button>
    <script src="{{ site.baseurl }}/assets/js/mytools/generate_password.js"></script>
  </div>
</div>
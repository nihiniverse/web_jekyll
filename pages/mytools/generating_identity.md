---
layout: default
title: Nihiniverse - Generating Identity
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Text" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Random Identity Generator</span>
        <form class = "name_form noborder">
            <table class="table table_identity noborder">
                <tr>
                    <td class="left noborder"><label for="sex-select">Sex:</label></td>
                    <td class="right noborder"><select class = "styled-input" id="sex-select" name="sex-select">
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="R">Random</option>
                    </select></td>
                </tr>
                <tr>
                    <td class="left noborder"><label for="algorithm-select">Weighting:</label></td>
                    <td class="right noborder"><select class = "styled-input" id="algorithm-select" name="algorithm-select">
                        <option value="equal">Equal Weighting</option>
                        <option value="higher-count">Frequency Weighting</option>
                        <option value="lower-count">Inverse Frequency Weighting</option>
                    </select></td>
                </tr>
            <tr>
                <td class="left noborder"><label for="min-age">Minimum Age:</label></td>
                <td class="right noborder"><input class = "styled-input" type="number" id="min-age" name="min-age" value="18"></td>
            </tr> 
            <tr>
                <td class="left noborder"><label for="max-age">Maximum Age:</label></td>
                <td class="right noborder"><input class = "styled-input" type="number" id="max-age" name="max-age" value="28"></td>
            </tr> 
            <tr>
                <td class="left noborder"><label for="country-select">Country:</label></td>
                <td class="right noborder"><select class = "styled-input" id="country-select" name="country-select"></select></td>
            </tr>
            <tr >
                <td style="border-right: none;"></td>
                <td style="border-left: none;"><button class="btn" type="submit">Generate Name</button></td>
            </tr>
            <tr>
                <td class="left noborder"><label for="first-name-input">First Name:</label></td>
                <td class="right noborder"><input class = "styled-input" type="text" id="first-name-input" placeholder=""></td>
            </tr>
            <tr>
                <td class="left noborder"><label for="last-name-input">Last Name:</label></td>
                <td class="right noborder"><input class = "styled-input" type="text" id="last-name-input" placeholder=""></td>
            </tr>
            <tr>
                <td class="left noborder"><label for="day">Day:</label></td>
                <td class="right noborder"><input class = "styled-input" type="number" id="day" name="day"></td>
            </tr>
            <tr>
                <td class="left noborder"><label for="month">Month:</label></td>
                <td class="right noborder"><input class = "styled-input" type="number" id="month" name="month"></td>
            </tr>
            <tr>
                <td class="left noborder"><label for="year">Year:</label></td>
                <td class="right noborder"><input class = "styled-input" type="number" id="year" name="year"></td>
            </tr>
            </table>
            </form>
      <script src="{{ site.baseurl }}/assets/js/mytools/generate_identity.js"></script>
    </div>
</div>

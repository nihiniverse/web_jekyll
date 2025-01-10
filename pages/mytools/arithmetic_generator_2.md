---
layout: default
title: Nihiniverse - Arithmetic Generator II
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Text" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Arithmetic Generator II</span>
        <table class = "table table_password noborder">
            <tr>
                <td class="left noborder"><label for="num-no">No. of Number</label></td>
                <td class="right noborder">
                    <select class = "styled-input" id="num-no">
                        <option value="1">1</option>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <!-- Add more options if needed -->
                    </select>
                </td>
            </tr>
            <tr>
                <td class="left noborder"><label for="num1-min">Min Digit:</label></td>
                <td class="right noborder">
                <select class = "styled-input" id="num-min">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <!-- Add more options if needed -->
                </select>
                </td>
            </tr>
            <tr>
                <td class="left noborder"><label for="num1-max">Max Digit:</label></td>
                <td class="right noborder">
                <select class = "styled-input" id="num-max">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <!-- Add more options if needed -->
                </select>
                </td>
            </tr>
            <tr>
                <td class="left noborder" colspan="2" class = "center"><label for="operators" class = "center">Operators:</label></td>
            </tr>
            <tr>
                <td>
                    <label>
                        <input class = "center" type="checkbox" name="operator" value="+" checked> Add
                    </label>
                </td> 
                <td>
                    <label>
                        <input class = "center" type="checkbox" name="operator" value="-" checked> Minus
                    </label>
                </td>
            </tr>
            <tr>
                <td>
                    <label>
                        <input class = "center" type="checkbox" name="operator" value="×" checked> Multiply
                    </label>
                </td>
                <td>
                    <label>
                        <input class = "center" type="checkbox" name="operator" value="÷"> Divide
                    </label>
                </td>
            </tr>
            <tr>
                <td colspan="2" class = "center">
                    <label class = "center">
                        <input class = "center" type="checkbox" id="parenthesesCheckbox"> Add parentheses
                    </label>
                </td>
            </tr>
        </table>
        <button class = "btn center" id="generate" onclick="generateQuestion()">Generate Question</button>
        <p id="question"></p>
        <input class = "styled-input" type="number" id="answer" placeholder="Answer"><br>
        <button class = "btn center" id="check" onclick="checkAnswer()">Check Answer</button><br>
        <p id="result"></p>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/arithmetic_generator_2.js"></script>
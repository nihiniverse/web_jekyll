---
layout: default
title: Nihiniverse - Arithmetic Generator I
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Text" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">Fraction Arithmetic Generator</span>
        <table class = "table table50 noborder">
            <tr>
                <td class="left noborder"></td>
                <td class = "minmax right noborder">Min. Digit</td>
                <td class = "minmax right noborder">Max. Digit</td>
            </tr>
            <tr>
                <td class="left noborder"><label for="num1-num">1st No. Numerator:</label></td>
                <td class="right noborder">
                    <select class = "fraction-input" id="num1-num-min">
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
                <td class="right noborder">
                    <select class = "fraction-input" id="num1-num-max">
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
                <td><label for="num1-deno">1st No. Denominator:</label></td>
                <td class="right noborder">
                <select class = "fraction-input" id="num1-deno-min">
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
                <td class="right noborder">
                <select class = "fraction-input" id="num1-deno-max">
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
                <td><label for="num2-num">2nd No. Numerator:</label></td>
                <td class="right noborder">
                <select class = "fraction-input" id="num2-num-min">
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
                <td class="right noborder">
                <select class = "fraction-input" id="num2-num-max">
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
                <td><label for="num2-demo">2nd No. Denominator:</label></td>
                <td class="right noborder">
                <select class = "fraction-input" id="num2-deno-min">
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
                <td class="right noborder">
                <select class = "fraction-input" id="num2-deno-max">
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
                <td><label for="operator">Operator:</label></td>
                <td class="right noborder" colspan="2">
                <select class = "fraction-input" id="operator">
                    <option value="random">Random</option>
                    <option value="+">Add</option>
                    <option value="-">Minus</option>
                    <option value="×">Multiply</option>
                    <option value="÷">Divide</option>
                </select>
                </td>
            </tr>
        </table>
        <button class = "btn center" id="generate" onclick="generateQuestion()">Generate Question</button>
        <div class="input-container">
            <table class = "table table_center noborder" id="question">
                <tr>
                    <td id = "num1num"></td>
                    <td rowspan="2" id = "operater"></td>
                    <td id = "num2num"></td>
                </tr>
                <tr>
                    <td id = "num1deno"></td>
                    <td id = "num2deno"></td>
                </tr>
            </table>
        </div>
        <div class="input-container">
            <input class = "fraction-input2" type="number" id="answernum" placeholder="Numerator"><br>
            <div class="input-line"></div><br>
            <input class = "fraction-input2" type="number" id="answerdeno" placeholder="Denominator"><br>
        </div>
            <button class = "btn center" id="check" onclick="checkAnswer()">Check Answer</button><br>
        <div class="input-container">
            <table class ="result table_center noborder" id = "result">
                <tr>
                    <td rowspan="2" class = "center" id = "resultmessage"></td>
                    <td class = "center" id = "resultnum"></td>
                </tr>
                <tr>
                    <td class = "center" id = "resultdeno"></td>
                </tr>
            </table>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/fraction.js/fraction.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/mytools/fraction_arithmetic_generator.js"></script>
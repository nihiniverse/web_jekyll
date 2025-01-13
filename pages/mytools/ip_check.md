---
layout: default
title: Nihiniverse - IP Checker
---

{% assign tools = site.data.tools %}
{% assign default_type = "Text" %}
{% assign current_page_type = "Web" %}

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/tools.css">
<div class="tools-container">
    <div class="home-max-width max-content-container">
        {% include nav_tools.md default_type=current_page_type current_page_type=current_page_type %}
        <span class="title-text1">IP Checker</span>
        <table class = "table table50 noborder">
            <tr>
                <td>Your IP Address:</td>
                <td id="ipAddress"></td>
            </tr>
            <tr>
                <td>IP version:</td>
                <td id="version"></td>
            </tr>
            <tr>
                <td>Your ISP:</td>
                <td id="isp"></td>
            </tr>
            <tr>
                <td>Your City:</td>
                <td id="city"></td>
            </tr>
            <tr>
                <td>Your Country:</td>
                <td id="country"></td>
            </tr>
            <tr>
                <td>Country Code (2 digit):</td>
                <td id="country_code"></td>
            </tr>
            <tr>
                <td>Country Code (3 digit):</td>
                <td id="country_code_iso3"></td>
            </tr>
            <tr>
                <td>Postal:</td>
                <td id="postal"></td>
            </tr>
            <tr>
                <td>Time Zone:</td>
                <td id="utd_offset"></td>
            </tr>
        </table>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/ip_check.js"></script>
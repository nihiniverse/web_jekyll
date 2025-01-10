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
        <span class="title-text1">Random Chinese Word</span>
        <div class="containers_center width60">
        <p><span class = "font18"> Click the button below to generate a random Chinese word:</span></p>
            <form class = "font20 form_class1 noborder">
                <label class = "font20" for="target-language">Translate to:</label>
                <select class = "font20" id="target-language">
                    <option value="ar">Arabic</option>
                    <option value="zh">Chinese(Simp)</option>
                    <option value="en" selected>English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="hi">Hindi</option>
                    <option value="id">Indonesian</option>
                    <option value="ga">Irish</option>
                    <option value="it">Italian</option>
                    <option value="ja">Japanese</option>
                    <option value="ko">Korean</option>
                    <option value="pl">Polish</option>
                    <option value="pt">Portuguese</option>
                    <option value="ru">Russian</option>
                    <option value="es">Spanish</option>
                    <option value="tr">Turkish</option>
                    <option value="vi">Vietnamese</option>
                </select>
            </form>
            <form class = "text_end" id="word-form">
                <label class = "left font18" for="min-rank">Minimum Rank:</label>
                <input class = "right font18" type="number" id="min-rank" name="min-rank" min="1" max="9767" value="1" required><br>
                <label class = "left font18" for="max-rank">Maximum Rank:</label>
                <input class = "right font18" type="number" id="max-rank" name="max-rank" min="1" max="9767" value="5000" required>
            </form>
		<p></p>
		<div class="containers_center">
        	<button class = "btn" id = "generate_word" onclick="generateWord()">Random Word</button>
		</div>
        <p id="rand-word"></p>
        <p id="word_meaning"></p>
		<p id="trans_word"></p>
		<p id="word_rank"></p>
		<p class = "center" id="dict_links"></p>
		</div>
		<div class ="ref-container" id="reference">
			<p><b>Reference: </b><br>
				The Chinese word frequency list is from <a class = "href-link" href='https://en.wiktionary.org/wiki/Appendix:Mandarin_Frequency_lists'>https://en.wiktionary.org/wiki/Appendix:Mandarin_Frequency_lists.</a><br>
				The translate is powered by <a class = "href-link" href='https://github.com/argosopentech/argos-translate'>https://github.com/argosopentech/argos-translate.</a><br>
				Note by Terrence: The translate sometimes is not so accurate, better to go to dictionaries for more information.
			</p>
		</div>
    </div>
</div>
<script src="{{ site.baseurl }}/assets/js/mytools/random_chinese_word.js"></script>
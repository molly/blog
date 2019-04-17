---
layout: default
title: "Molly White – Archives"
---
<div class="toc">
  <ul class="texts">
  {% for item in site.posts %}
  	{% if item.categories contains 'archive' %}
	  
	    <li class="text-title">
	      <a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>, <time datetime="{{item.date}}">{{ page.date | date: "%B %e, %Y" }}</time>
	    </li>
    {% endif %}
  {% endfor %}
  </ul>
</div>




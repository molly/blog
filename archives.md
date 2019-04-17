---
layout: default
title: "Molly White – Archives"
---
<div class="toc">
  <div class="post-list"> 
  {% for item in site.posts %}
    {% if item.categories contains 'archive' %}
      <article class="post-item">
        <h2 class="title-text"><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></h2>
        <div class="post-data">
          <small><time datetime="{{item.date}}">{{ item.date | date: "%B %e, %Y" }}</time></small>
          <p>{{ item.excerpt | remove: '<p>' | remove: '</p>' | strip }}...</p>
        </div>
      </article>
    {% endif %}
  {% endfor %}
  </div>
</div>




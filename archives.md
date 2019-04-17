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
        <div class="post-meta">
          <time datetime="{{item.date}}">{{ item.date | date: "%B %e, %Y" }}</time>
        </div>
        <p class="post-excerpt">{{ item.excerpt | remove: '<p>' | remove: '</p>' | strip }}...</p>
      </article>
    {% endif %}
  {% endfor %}
  </div>
</div>




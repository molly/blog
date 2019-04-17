---
layout: default
title: "Molly White – Archives"
---
<div class="toc">
  <div class="post-list"> 
    <h2>Archived posts</h2>
    {% for item in site.posts %}
      {% if item.categories contains 'archive' %}
        <article class="post-item">
          <div class="post-info">
            <h3 class="title-text"><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></h3>
            <time class="post-date" datetime="{{item.date}}">{{ item.date | date: "%B %e, %Y" }}</time>
          </div>
          <p class="post-excerpt">{{ item.custom_excerpt }}</p>
        </article>
      {% endif %}
    {% endfor %}
  </div>
</div>




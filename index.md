---
layout: default
title: Sidney Lima Filho
---

<ul id="posts" class="index">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title | xml_escape }}</a>
      <span>
      	<time datetime="{{ post.date | date: "%Y-%m-%d" }}">
      		{{ post.date | date: "%B %d, %Y" }}
      	</time>
      </span>
    </li>
  {% endfor %}
</ul>
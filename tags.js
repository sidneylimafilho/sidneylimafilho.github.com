---
layout: nil
---
var tags = {};
{% for post in site.posts %}
   {% for tag in post.tags %}
      var tag = tags["{{tag}}"] = tags["{{tag}}"] || {count:0, posts:[]};
      tag.count++;
      tag.posts.push({
      	title: "{{post.title}}"
      });
   {% endfor %}
{% endfor %}

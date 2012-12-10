---
layout: nil
---
var tag,tags = {};

{% for post in site.posts %} {% for tag in post.tags %}
tag = tags["{{tag}}"] = tags["{{tag}}"] || {count:0, posts:[]};
tag.count++;
tag.posts.push({
	title: "{{post.title}}",
	excerpt: "{{post.excerpt}}",
	date: "{{post.date}}",
	tags:[ {% for posttag in post.tags %}"{{posttag}}",{% endfor %}	false]
});
{% endfor %} {% endfor %}

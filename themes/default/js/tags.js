---
layout: nil
---
var tag = {}, tags = {}, posts = [];

{% for post in site.posts %} 
posts.unshift({ 
    title: "{{post.title | strip_newlines}}", 
    image: "{{post.image | strip_newlines}}", 
    url: "{{post.url | strip_newlines}}", 
    excerpt: "{{post.excerpt | strip_newlines}}", 
    date: Date.parse("{{post.date}}") 
}); 
{% for tag in post.tags %} (tags["{{tag}}"] || (tags["{{tag}}"] = {posts:[]})).posts.push(posts[0]); {% endfor %}
{% endfor %}

$(function() {
    var html = "";
    for (var i in tags) if (tag = tags[i]) {
        html += "<span>" + i + " (" + tag.posts.length + ")</span>";
    }
    $(".tag-cloud").html(html);
})

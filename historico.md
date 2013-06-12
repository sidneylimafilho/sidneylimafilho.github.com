---
author: Sidney Lima Filho
layout: default
---
<div>
    <ul class="history">
        {% for post in site.posts %}
             {% if post.published %}
            <li>
                <a href="{{ post.url }}">                   
                    <small>
                        {{ post.date | date: "%d/%m/%Y" }}
                    </small>                                       
                    <b>{{ post.title | xml_escape }}</b>                    
                </a>
                {% for tag in post.tags %}<span>{{tag}}</span>{% endfor %}
            </li>
            {% endif %}
        {% endfor %}
    </ul>
</div>
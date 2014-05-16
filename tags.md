---
author: Sidney Lima Filho
layout: default
---

<h1> Lista de Assuntos </h1>
<div class="tag-list">
    
{% capture tagsAsString %}{% for tag in site.tags %}{{ tag | first }},{% endfor %}{% endcapture %}
{% assign tags = tagsAsString | split:"," | sort %}

     {% for tag in tags %} 
       
        <div id='{{tag | downcase | replace:" ","-" | replace:".","" }}'>
        <h2>{{tag}}</h2>
        <ul class="tag">       
            {% for post in site.tags[tag] %} 
                {% if post.published %}
                    <li>
                        <a href="{{ post.url }}">                   
                            <small>{{ post.date | date: "%d/%m/%Y" }}</small>                                       
                            <b>{{ post.title | xml_escape }}</b>                    
                        </a>                        
                    </li>
                {% endif %}                
            {% endfor %} 
        </ul>  
        </div>         
    {% endfor %}   
</div>
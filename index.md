---
author: Sidney Lima Filho
layout: default
---


<div class="post-wall" data-bind="template: { if: items().length > 0, name: getTemplate, foreach: items }"></div>

<div id="postTemplate" style="display:none">
    <div class="widget" data-bind="attr:{'style': 'background-image:url('+ item.image +');'}">
        <a data-bind="attr:{'href': item.url}">
            <resume>
                <time>
                    <day data-bind="text: moment(date).format('DD')"></day>
                    <month data-bind="text: moment(date).format('MMM').toUpperCase()"></month>
                    <year data-bind="text: moment(date).format('YYYY').toUpperCase()"></year>
                </time>
                <div class="title" data-bind="text: item.title"></div>
                
                <small class="excerpt" data-bind="text: item.excerpt.substr(0, 300)"></small>                
            </resume>
        </a>
        <a target="_blank" class="button feed" data-bind="attr:{href: $root.user[type].getUrl(), title: $root.user[type].title}"></a>
    </div>
</div>

<div id="videoTemplate" style="display:none">
    <div class="widget" data-bind="attr:{style:'background-image:url('+ item.thumbnail.hqDefault +');'}">        
        <!-- <iframe width="600" height="300" frameborder="0" allowfullscreen="yes" ></iframe> 
        <img width="300" data-bind="attr:{src: item.thumbnail.hqDefault, title: item.title}" /> -->
        <a href="javascript:;" data-bind="click:$root.user.youtube.showVideo">
            <resume>
                <time>
                    <day data-bind="text: moment(date).format('DD')"></day>
                    <month data-bind="text: moment(date).format('MMM').toUpperCase()"></month>
                    <year data-bind="text: moment(date).format('YYYY').toUpperCase()"></year>
                </time>
                <div class="title" data-bind="text: item.title"></div>  
                <small class="excerpt" data-bind="text: item.description.substr(0, 300)"></small>                          
            </resume>
        </a>
        <a target="_blank" class="button youtube" data-bind="attr:{href: $root.user.youtube.getUrl(), title: $root.user.youtube.title}"></a>       
    </div>
</div>

<div id="tweetTemplate" style="display:none">
    <div class="widget twitter">
        <a href="javascript:;">
            <table><tr><td data-bind="text: item.text" style="text-align: center; padding: 20px;"></td></tr></table>
             <resume>
                <time>
                    <day data-bind="text: moment(date).format('DD')"></day>
                    <month data-bind="text: moment(date).format('MMM').toUpperCase()"></month>
                    <year data-bind="text: moment(date).format('YYYY').toUpperCase()"></year>
                </time>
                <div class="title" data-bind="text: type">Últimas do Twitter</div>                                        
            </resume>
        </a>
        
        <a target="_blank" class="button twitter" data-bind="attr:{href: $root.user.twitter.getUrl(), title: $root.user.twitter.title}"></a>
    </div>


</div>

<div id="bookmarkTemplate" style="display:none">
    <div class="widget">
        <a data-bind="attr:{href: item.url}">
            <resume>
                <b data-bind="text: item.title"></b>
                <small data-bind="text: moment(date).format('DD/MM/YYYY')"></small>                           
            </resume>
        </a>
        <a target="_blank" data-bind="attr:{class: 'button ' + type, href: $root.user[type].getUrl(), title: $root.user[type].title}"></a>
    </div>
</div>

<div id="slideTemplate" style="display:none">
    <div class="widget" data-bind="attr:{style:'background-image:url('+ $root.user[type].getImageUrl(item.mediaGroups[0].contents[0].thumbnails[0].url) +');'}">        
        <!-- <iframe width="600" height="300" frameborder="0" allowfullscreen="yes" ></iframe> 
        <img width="300" data-bind="attr:{src: item.thumbnail.hqDefault, title: item.title}" /> -->
        <a data-bind="attr:{href: item.link}">
            <resume>
                <time>
                    <day data-bind="text: moment(date).format('DD')"></day>
                    <month data-bind="text: moment(date).format('MMM').toUpperCase()"></month>
                    <year data-bind="text: moment(date).format('YYYY').toUpperCase()"></year>
                </time>
                <div class="title" data-bind="text: item.title"></div>     
                <small class="excerpt" data-bind="text: item.mediaGroups[0].contents[0].description.substr(0, 300)"></small>                                             
            </resume>
        </a>
        <a target="_blank" class="button slideshare" data-bind="attr:{href: $root.user[type].getUrl(), title: $root.user[type].title}"></a>       
    </div>
</div>



<script type="text/javascript">    
    function ViewModel(user) {  
        /* Constructor */ 
        var $this = this;     
        this.user = user;
        user.items = this.items = ko.observableArray();

        /* Methods */
        this.getTemplate = function(item) {
            return item.template;
        }

        this.initialize = function(node) {
            var it = this;                                              

            google.load("feeds", "1");            
            google.setOnLoadCallback(function () {                     
                it.user.feed.loadItems(it.loaded);
                it.user.youtube.loadItems(it.loaded);
                it.user.twitter.loadItems(it.loaded); 
                it.user.slideshare.loadItems(it.loaded); 
            });
                
            ko.applyBindings(it, node);           
        };  

        this.sourcesCount = 0;

        this.loaded = function(){            
            if (++$this.sourcesCount < 4) return;

            $this.items.sort(function(a,b){ return a.date < b.date; });
        }
    }

    (vm = new ViewModel(User)).initialize($(".post-wall").get(0)); 
    
</script>


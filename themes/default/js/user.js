---
    layout: nil
---


User = {
    items: [],
    name: "sidneylimafilho",
    quotes: [{
        author: "Sidney Lima Filho",
        text: "Desenvolver Software é a arte de cultivar a informação de forma que ela cresça naturalmente através de mãos distintas.",
        banner: "craftsmanship-cover.jpg"
    }, {
        author: "Garry Kasparov",
        text: "O que interessa é desenvolver um sistema de agressividade controlada, a fim de nos separarmos dos inertes. Agressividade, nesse contexto, significa dinamismo, coragem e muita vontade de agir.",
        banner: "nurture_seedling_in_hands_low_level.jpg"
    }, {
        author: "Margaret Thatcher",
        text: "Nunca tome uma decisão até que ela seja necessária.",
        banner: "nurture_seedling_in_hands_low_level.jpg"
    }, {
        author: "Goethe",
        text: "Saber não basta, devemos aplicar. Desejar não basta, devemos fazer.",
        banner: "road.jpg"
    }, {
        author: "Albert Schweitzer",
        text: "Faça coisas maravilhosas na vida, ao ponto de as pessoas quererem imitá-lo",
        banner: "craftsmanship-cover.jpg"
    }, {
        author: "Garry Kasparov",
        text: "Uma ameaça geralmente é tão forte quanto sua execução.",
        banner: "road.jpg"
    }, {
        author: "Leonardo Boff",
        text: "O cuidado previne danos futuros, ao mesmo tempo que repara danos passados. Quando amamos cuidamos e quando cuidamos amamos",
        banner: "nurture_seedling_in_hands_low_level.jpg"
    }, {
        author: "Savielly Grigoryevich Tartakower",
        text: "Tática é saber o que fazer quando há o que fazer; Estratégia é saber o que fazer quando não há nada a fazer.",
        banner: "craftsmanship-cover.jpg"
    }, {
        author: "Chico Xavier",
        text: "Cada pessoa é aquilo que crê, fala do que gosta, retém o que procura, ensina o que aprende, tem o que dá e vale o que faz",
        banner: "craftsmanship-cover.jpg"
    }, {
        author: "Sidney Lima Filho",
        text: "A Cultura de uma empresa emerge dos comportamentos de todos os envolvidos. Para mudar uma cultura deve-se mudar o comportamento.",
        banner: "craftsmanship-cover.jpg"
    }],
    getRandomQuote: function() {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    },
    mail: {
        name: "sidneylimafilho",
        getUrl: function() {
            return "https://docs.google.com/spreadsheet/viewform?formkey=dEtLSzNWdXlnanJMdTN6WmtQb2VnMlE6MQ";
        }
    },
    github: {
        name: "sidneylimafilho",
        getUrl: function() {
            return "http://www.github.com/" + this.name;
        }
    },
    slideshare: {
        name: "sidneylimafilho",
        title: "Veja meus slides no Slideshare.",
        apiKey: "kpnW3dUw",
        sharedSecret: "benj7bzK",
        getUrl: function() {
            return "http://www.slideshare.net/" + this.name;
        },
        getApiFeedUrl: function() {
            return "http://www.slideshare.net/rss/user/" + this.name;
        },
        getImageUrl: function(url) {
            return url.replace("http:", "")
                .replace("cdn.slidesharecdn.com/ss_thumbnails", "image.slidesharecdn.com")
                .replace("-thumbnail-2", "/95/slide-1-638");
        },
        click: function(slide) {
            $("overlay").show(0).animate({
                opacity: 1
            }, 1000, function() {
                $(this).click(function() {
                    //User.slideshare.closeSlide();
                    $("overlay").animate({
                        opacity: 0
                    }, 1000, function() {
                        $(this).hide().find("div").html("");
                    });

                }).find("div").html('<iframe src="' + slide.item.link + '" width="599" height="487" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px 1px 0; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>');
            });
        },

        loadItems: function(callback) {
            var apresentacoes = new google.feeds.Feed(this.getApiFeedUrl());
            apresentacoes.load(function(result) {
                Enumerable.From(result.feed.entries).Take(4).ForEach(function(slide, index) {
                    //var temp = Enumerable.From(User.items()).Where("$.date < new Date('" + slide.publishedDate + "')").First();
                    //var start = Enumerable.From(User.items()).IndexOf(temp);



                    User.items.push({
                        template: "slideTemplate",
                        type: "slideshare",
                        date: new Date(slide.publishedDate),
                        item: slide
                    });
                });

                callback();
            });
        }
    },
    facebook: {
        name: "sidneylimafilho",
        getUrl: function() {
            return "http://www.facebook.com/" + this.name;
        }
    },
    linkedin: {
        name: "sidneylimafilho",
        getUrl: function() {
            return "http://www.linkedin.com/in/" + this.name;
        }
    },
    twitter: {
        name: "sidneylimafilho",
        title: "Pensamentos rápidos via Twitter.",
        getUrl: function() {
            return "http://twitter.com/" + this.name;
        },
        getApiFeedUrl: function() {
            return "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + this.name + "&callback=?";
        },
        getApiFavoritesUrl: function() {
            return "http://api.twitter.com/1/favorites.json?screen_name=" + this.name + "&callback=?";
        },
        loadItems: function(callback) {

            $.getJSON(this.getApiFeedUrl(), function(json) {
                Enumerable.From(json).Where("!$.in_reply_to_status_id && !$.in_reply_to_user_id").Take(1).ForEach(function(tweet, index) {
                    //var temp = Enumerable.From(User.items()).Where("$.date < new Date('" + tweet.created_at + "')").First();
                    //var start = Enumerable.From(User.items()).IndexOf(temp);

                    User.items.push({
                        template: "tweetTemplate",
                        type: "Ultimas no Twitter",
                        date: new Date(tweet.created_at),
                        item: tweet
                    });
                });


            });

            $.getJSON(this.getApiFavoritesUrl(), function(json) {
                Enumerable.From(json).Where("!$.in_reply_to_status_id && !$.in_reply_to_user_id").Take(6).ForEach(function(tweet, index) {
                    //var temp = Enumerable.From(User.items()).Where("$.date < new Date('" + tweet.created_at + "')").First();
                    //var start = Enumerable.From(User.items()).IndexOf(temp);
                    User.items.push({
                        template: "tweetTemplate",
                        type: "Favoritei no Twitter",
                        date: new Date(tweet.created_at),
                        item: tweet
                    });
                });

                callback();
            });
        }
    },
    youtube: {
        name: "TheSidneyLimaFilho",
        title: "Filmes que assisto via Youtube.",
        getUrl: function() {
            return "http://www.youtube.com/user/" + this.name;
        },
        embedUrl: "http://www.youtube.com/embed/",
        getApiFeedUrl: function() {
            return "http://gdata.youtube.com/feeds/api/users/" + this.name + "/favorites?alt=jsonc&v=2";
        },
        click: function(video) {
            $("overlay").show(0).animate({
                opacity: 1
            }, 1000, function() {
                $(this).click(function() {
                    //User.youtube.closeVideo();

                    $("overlay").animate({
                        opacity: 0
                    }, 1000, function() {
                        $(this).hide().find("div").html("");
                    });

                }).find("div").html('<iframe width="854" height="510" src="' + User.youtube.embedUrl + video.item.id + '" frameborder="0" allowfullscreen></iframe>');
            });
        },
        loadItems: function(callback) {
            $.getJSON(this.getApiFeedUrl(), function(json) {
                // bubble sort
                Enumerable.From(json.data.items).Where("$.video.accessControl.embed === 'allowed'").Take(4).ForEach(function(value, index) {
                    //var temp = Enumerable.From(User.items()).Where("$.date < new Date('" + value.created + "')").First();
                    //var start = Enumerable.From(User.items()).IndexOf(temp);

                    User.items.push({
                        template: "videoTemplate",
                        date: new Date(value.created),
                        item: value.video
                    });
                });

                callback();
            });
        }
    },
    feed: {
        title: "Assine meus posts com o RSS.",
        getUrl: function() {
            return "http://feeds.feedburner.com/sidneyfilho/";
        },
        loadItems: function(callback) {

            var posts = [];

            /*{% for post in site.posts limit: 4 %}*/
            posts.unshift({
                title: "{{post.title | strip_newlines}}",
                image: "{{post.image | strip_newlines}}",
                url: "{{post.url | strip_newlines}}",
                excerpt: "{{post.excerpt | strip_newlines}}",
                date: Date.parse("{{post.date | date:'%a, %d %b %Y %H:%M:%S %z'}}")
            });
            /*{% endfor %}*/

            Enumerable.From(posts).OrderByDescending("$.date").Take(4).ForEach(function(post, index) {
                User.items.push({
                    template: "postTemplate",
                    date: new Date(post.date),
                    type: "feed",
                    item: post
                });
            });

            callback();
        }
    },
    delicious: {
        name: "sidneylimafilho",
        tag: "Favorite",
        getUrl: function() {
            return "http://delicious.com/" + this.name;
        },
        getApiFeedUrl: function() {
            return "http://feeds.delicious.com/v2/json/" + this.name + "/" + this.tag + "?callback=?";
        },
        loadItems: function(callback) {
            return false; // temporariamente cancelado pois será feito no layout            
            $.getJSON(this.getApiFeedUrl(), function(json) {
                Enumerable.From(json).Take(4).ForEach(function(value, index) {
                    //var temp = Enumerable.From(User.items()).Where("$.date < new Date('" + value.dt + "')").First();
                    //var start = Enumerable.From(User.items()).IndexOf(temp);

                    User.items.push({
                        template: "bookmarkTemplate",
                        date: new Date(value.dt),
                        type: "delicious",
                        item: {
                            url: value.u,
                            title: value.d,
                            date: value.dt
                        }
                    });
                });

                callback();
            });
        }
    }
};

User = {
    items: [],
    name: "sidneylimafilho",
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
        getUrl: function() {
            return "http://www.slideshare.net/" + this.name;
        },
        getApiFeedUrl: function() {
            return "http://www.slideshare.net/rss/user/" + this.name;
        },
        loadItems: function() {
            var apresentacoes = new google.feeds.Feed(this.getApiFeedUrl());
            apresentacoes.load(function(result) {
                Enumerable.From(result.feed.entries).Take(4).ForEach(function(slide, index) {
                    var temp = Enumerable.From(User.items()).Where("$.date < new Date('" + slide.publishedDate + "')").First();
                    var start = Enumerable.From(User.items()).IndexOf(temp);

                    User.items.splice(start, 0, {
                        template: "slideTemplate",
                        type: "slideshare",
                        date: new Date(slide.publishedDate),
                        item: slide
                    });
                });


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
        loadItems: function() {

            $.getJSON(this.getApiFeedUrl(), function(json) {
                Enumerable.From(json).Where("!$.in_reply_to_status_id && !$.in_reply_to_user_id").Take(1).ForEach(function(tweet, index) {
                    var temp = Enumerable.From(User.items()).Where("$.date < new Date('" + tweet.created_at + "')").First();
                    var start = Enumerable.From(User.items()).IndexOf(temp);
                    User.items.splice(start, 0, {
                        template: "tweetTemplate",
                        type: "Ultimas no Twitter",
                        date: new Date(tweet.created_at),
                        item: tweet
                    });
                });
            });

            $.getJSON(this.getApiFavoritesUrl(), function(json) {
                Enumerable.From(json).Where("!$.in_reply_to_status_id && !$.in_reply_to_user_id").Take(3).ForEach(function(tweet, index) {
                    var temp = Enumerable.From(User.items()).Where("$.date < new Date('" + tweet.created_at + "')").First();
                    var start = Enumerable.From(User.items()).IndexOf(temp);
                    User.items.splice(start, 0, {
                        template: "tweetTemplate",
                        type: "Favoritei no Twitter",
                        date: new Date(tweet.created_at),
                        item: tweet
                    });
                });
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
        showVideo: function(video) {
            $("overlay").show(0).animate({
                opacity: 1
            }, 1000, function() {
                $(this).click(function() {
                    User.youtube.closeVideo();
                }).find("div").html('<iframe width="854" height="510" src="' + User.youtube.embedUrl + video.object.id + '" frameborder="0" allowfullscreen></iframe>');
            });
        },
        closeVideo: function() {
            $("overlay").animate({
                opacity: 0
            }, 1000, function() {
                $(this).hide().find("div").html("");
            });
        },
        loadItems: function() {
            $.getJSON(this.getApiFeedUrl(), function(json) {
                // bubble sort
                Enumerable.From(json.data.items).Where("$.video.accessControl.embed === 'allowed'").Take(4).ForEach(function(value, index) {
                    var temp = Enumerable.From(User.items()).Where("$.date < new Date('" + value.created + "')").First();
                    var start = Enumerable.From(User.items()).IndexOf(temp);

                    User.items.splice(start, 0, {
                        template: "videoTemplate",
                        date: new Date(value.created),
                        item: value.video
                    });
                });
            });
        }
    },
    feed: {
        title: "Assine meus posts com o RSS.",
        getUrl: function() {
            return "/rss.xml";
        },
        loadItems: function() {
            Enumerable.From(posts).OrderByDescending("$.date").Take(10).ForEach(function(post, index) {
                User.items.push({
                    template: "postTemplate",
                    date: new Date(post.date),
                    type: "feed",
                    item: post
                });
            });
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
        loadItems: function() {
            return false; // temporariamente cancelado pois será feito no layout            
            $.getJSON(this.getApiFeedUrl(), function(json) {
                Enumerable.From(json).Take(4).ForEach(function(value, index) {
                    var temp = Enumerable.From(User.items()).Where("$.date < new Date('" + value.dt + "')").First();
                    var start = Enumerable.From(User.items()).IndexOf(temp);

                    User.items.splice(start, 0, {
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


            });

        }
    }
};

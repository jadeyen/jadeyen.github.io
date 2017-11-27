(function($) {

    "use strict";

    var cfg = {
        scrollDuration : 800,
    },

    // jQuery Function Number 1
    var ssPrettyPrint = function() {
        $('pre').addClass('prettyprint');
        $( document ).ready(function() {
            prettyPrint();
        });
    };

    // jQuery Function Number 2
    var ssMoveHeader = function () {

        var hero = $('.page-hero'),
            hdr = $('header'),
            triggerHeight = hero.outerHeight() - 170;


        $(window).on('scroll', function () {

            var loc = $(window).scrollTop();

            if (loc > triggerHeight) {
                hdr.addClass('sticky');
            } else {
                hdr.removeClass('sticky');
            }

            if (loc > triggerHeight + 20) {
                hdr.addClass('offset');
            } else {
                hdr.removeClass('offset');
            }

            if (loc > triggerHeight + 150) {
                hdr.addClass('scrolling');
            } else {
                hdr.removeClass('scrolling');
            }

        });

    };

    // jQuery Function Number 3
    var ssMasonryFolio = function () {

        var containerBricks = $('.masonry');

        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
                resize: true
            });
        });
    };


    // jQuery Function Number 4
    var ssWaypoints = function() {

        var sections = $(".target-section"),
            navigation_links = $(".header-nav li a");

        sections.waypoint( {

            handler: function(direction) {

                var active_section;

                active_section = $('section#' + this.element.id);

                if (direction === "up") active_section = active_section.prevAll(".target-section").first();

                var active_link = $('.header-nav li a[href="#' + active_section.attr("id") + '"]');

                navigation_links.parent().removeClass("current");
                active_link.parent().addClass("current");

            },

            offset: '25%'

        });

    };

    // jQuery Function Number 5
    var ssSmoothScroll = function() {

        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);

            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing', function () {
                window.location.hash = target;
            });

        });
    };

    // jQuery Function Number 6
    $( ".home-content" ).hover(function() {
      $( "#row home-content__main" ).fadeIn( "slow")
    });



    (function ssInit() {
        ssPrettyPrint();
        ssMoveHeader();
        ssMasonryFolio();
        ssWaypoints();
        ssSmoothScroll();

    })();


})(jQuery);

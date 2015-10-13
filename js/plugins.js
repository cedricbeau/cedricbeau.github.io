// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


//
// ----- Place any jQuery/helper plugins in here.
//

// Smooth scroll
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


/*!
 * jQuery Scrolltop button plugin v1.0.1
 * jQuery plugin that adds a fading "back to top" button to a page
 *
 * https://github.com/danieledesantis/jquery-scrolltop-button
 *
 * Released under the MIT License
 * Copyright 2014 Daniele De Santis
 */
(function(e) {
    var t = function(t, n) {
        function r() {
            if (e(window).scrollTop() > n.scrollHeight) {
                t.fadeIn(200)
            } else if (e(window).scrollTop() <= n.scrollHeight) {
                t.fadeOut(200)
            }
        }

        function i() {
            e("body,html").animate({
                scrollTop: 0
            }, n.scrollDuration)
        }

        function s() {
            if (!n.customCss) {
                t.css({
                    bottom: "20px",
                    right: "20px",
                    width: "40px",
                    height: "40px",
                    "border-radius": "50%",
                    "background-color": "#72B8B8",
                    cursor: "pointer"
                });
                t.html('<span style="display:block; height:40px; line-height:40px; text-align:center; color:#ffffff"><strong>&and;</strong></span>')
            }
            t.css({
                display: "none",
                position: "fixed",
                "z-index": "9999"
            }).bind("click", i);
            r()
        }
        e(window).scroll(function() {
            r()
        });
        s()
    };
    e.fn.scrollTopButton = function(n) {
        var r = {
            scrollHeight: 300,
            scrollDuration: 500,
            customCss: 0
        };
        var n = e.extend({}, r, n);
        return t(this, n)
    }
})(jQuery)

// ========================================
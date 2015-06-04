// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
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

// Place any jQuery/helper plugins in here.
!function(e){e.fn.dissolveGallery=function(){return this.each(function(){function n(e){c(),s.eq(u).velocity("fadeOut",{duration:400}),u=e,s.eq(u).velocity("fadeIn",{duration:400}),l.removeClass("selected").eq(u).addClass("selected")}function i(){var e=r>u?u+1:0;n(e)}function t(){a=setInterval(i,v)}function c(){clearInterval(a),t()}var a,d=e(this),l=d.find(".thumbs img"),s=d.find(".images img"),f=d.find(".next-btn"),o=d.find(".prev-btn"),r=s.length-1,u=0,v=4e3;s.hide().eq(u).show(),l.eq(u).addClass("selected"),t(),l.click(function(){var e=l.index(this);n(e)}),f.click(i),o.click(function(){var e=u>0?u-1:r;n(e)})})}}(jQuery);
!function(e){e.fn.sliderGallery=function(){return this.each(function(){function i(){clearTimeout(t),t=setTimeout(n,h),s.css({"margin-left":100*-u+"%"}),d.filter(".selected").removeClass("selected"),d.eq(u).addClass("selected")}function n(){u=m>u?u+1:0,i()}var s,t,l=e(this),c=l.find(".images img"),d=l.find(".thumbs img"),a=l.find(".images"),f=l.find(".next-btn"),r=l.find(".prev-btn"),o=c.length,u=0,m=o-1,h=4e3;c.wrapAll('<div class="slider">'),s=l.find(".slider"),s.width(100*o+"%").css({transition:"all 1s ease-in-out"}),c.width(100/o+"%"),d.eq(u).addClass("selected"),a.css({overflow:"hidden"}),t=setTimeout(n,h),d.click(function(){u=d.index(this),i()}),f.click(n),r.click(function(){u=u>0?u-1:m,i()})})}}(jQuery);
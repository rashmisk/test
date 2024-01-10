/**
 * 
 */
$(document).ready(function() {
    function randOrder() {
        return ( Math.round(Math.random())-0.5 ); 
    } 

    setInterval(function() {
        $('.left-animation .brand-col').removeClass('active').sort( randOrder ).slice(0,3).addClass('active');
        $('.right-animation .brand-col').removeClass('active').sort( randOrder ).slice(0,3).addClass('active');
    }, 3000);

}); 





(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

   $.fn.visible = function(partial) {

    var $t            = $(this),
    $w            = $(window),
    viewTop       = $w.scrollTop(),
    viewBottom    = viewTop + $w.height(),
    _top          = $t.offset().top,
    _bottom       = _top + $t.height(),
    compareTop    = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

$(window).scroll(function(event) {

  $(".brand-wrapper").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("active"); 
    } else {
      el.removeClass("active");
    }
  });
  
  
});

//  Responsive Tabs v1.0, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//  =======================================================================================

//function jQueryTabs(){$(".tabs").each(function(){$(".tabs-panel").not(":first").hide(),$("li",this).removeClass("active"),$("li:first-child",this).addClass("active"),$(".tabs-panel:first-child").show(),$("li",this).click(function(t){var i=$("a",this).attr("href");$(this).siblings().removeClass("active"),$(this).addClass("active"),$(i).siblings().hide(),$(i).fadeIn(400),t.preventDefault()}),$(window).width()<768&&$(".tabs-panel").show()})}$(document).ready(function(){jQueryTabs(),$(".tabs li a").each(function(){var t=$(this).attr("href"),i=$(this).html();$(t+" .tab-title").prepend("<p><strong>"+i+"</strong></p>")})}),$(window).resize(function(){jQueryTabs()});
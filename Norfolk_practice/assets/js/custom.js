
(function ($) 
{jQuery('.menu-top-menu-container').meanmenu({
    meanMenuContainer: '.main-navigation',
    meanScreenWidth: "1023",
    meanRevealPosition: "right",
});


/* back-to-top button*/

$('.back-to-top').hide();
$('.back-to-top').on("click", function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
});
$(window).scroll(function () {
    var scrollheight = 900;
    if ($(window).scrollTop() > scrollheight) {
        $('.back-to-top').fadeIn();

    } else {
        $('.back-to-top').fadeOut();
    }
});

  
})(jQuery);
'use strict';

(function ($) {
  // slider for banner content of home page

    $('.banner-content-wrap').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1, 
        
        
    });

    // why-choose-slider
		$(".image-slider").slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false 
    });
    // connecting arrows with slick slider
    $('.prev-arrow').click(function(){
      $('.image-slider').slick('slickPrev');
    });
  
      $('.next-arrow').click(function(){
      $('.image-slider').slick('slickNext');
    });

      
    // adding meanmenu for the screen less tham 1023
  $('.menu-top-menu-container').meanmenu({
    meanMenuContainer: '.navigation',
    meanScreenWidth: "1023",
    meanRevealPosition: "right",
    meanExpand: "+",
    meanContract: "-",
  })
  // hiding back-to-top button 
  $('.back-to-top').hide();
  $('.back-to-top').on("click", function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });
  
  $(window).scroll(function () {
    var scrollheight = 400;
    if ($(window).scrollTop() > scrollheight) {
      $('.back-to-top').fadeIn();

    } else {
      $('.back-to-top').fadeOut();
    }
  });
  
})(jQuery);


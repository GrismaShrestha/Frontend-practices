'use strict';

(function ($) {
  // slider for banner content of home page

    $('.banner-content-wrap').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1, 
      
        
      });
      
  // slider for the technologies of our solutions page 
  $('.technology-content-wrap').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,  
  });

  $('.menu-top-menu-container').meanmenu({
    meanMenuContainer: '.navigation',
    meanScreenWidth: "1023",
    meanRevealPosition: "right",
    meanExpand: "+",
    meanContract: "-",
  })
  
})(jQuery);


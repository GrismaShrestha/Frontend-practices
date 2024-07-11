'use strict';

(function ($) {
    // slick slider on matress choice section
    $('.choice-wrapper').slick({
      infinite: false,
      dots: false,
      arrows: true,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
          }
        }
      ]

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
        var scrollheight = 1000;
        if ($(window).scrollTop() > scrollheight) {
            $('.back-to-top').fadeIn();

        } else {
            $('.back-to-top').fadeOut();
        }
    });
    // header menu toggle on click
    const menuOpen = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    menuOpen.addEventListener('click', () => {
        menuOpen.classList.toggle('close');
        navMenu.classList.toggle('transform');
        html.classList.toggle('no-scroll');
    });
    // poll section
    if (document.querySelector('.user-poll-section')) {      
    const time = document.querySelector('.user-poll-section .time');
        const pollPopup = document.querySelector('.poll-popup');
        const msg = document.querySelector('.poll-popup p');
        const pollClose = document.querySelector('.poll-popup .poll-close');
      
        time.addEventListener('click', e => {
          if (e.target.classList.contains('4-6') || e.target.classList.contains('6-8') || e.target.classList.contains('8-10')) {
            pollPopup.classList.remove('d-none');
          }
      
          if (e.target.classList.contains('4-6')) {
            msg.textContent = 'You need to sleep more';
          }
          else if (e.target.classList.contains('6-8')) {
            msg.textContent = 'Your sleeping habit is good';
          }
          else if (e.target.classList.contains('8-10')) {
            msg.textContent = 'You are having best sleep';
          }
        });
      
        pollClose.addEventListener('click', () => {
          pollPopup.classList.add('d-none');
        });
    }
    // footer widget list open on click
    const widgetTitles = document.querySelectorAll('.site-footer .widget-title');
    const widgetLists = document.querySelectorAll('.site-footer .widget-list');

    widgetTitles.forEach((title, index) => {

      title.addEventListener('click', () => {

        if(title.classList.contains('active')){
          widgetLists[index].style.display = 'none';
          title.classList.remove('active');
        }

        else{
          widgetLists.forEach(list => list.style.display = 'none');
          widgetTitles.forEach(t => t.classList.remove('active'));

          widgetLists[index].style.display = 'block';
          title.classList.add('active');
        }
      })
    });
})(jQuery);
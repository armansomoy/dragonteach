var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500, );
            return false;
        }
    }
});

$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 1) {
        $(".nav_fixed").addClass('fixed');
    } else {
        $(".nav_fixed").removeClass('fixed');
    }
});

$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 500) {
        $(".top").show();
    } else {
        $(".top").hide();
    }
});

$('.portfolio_img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: '<i class="fa fa-arrow-right right_arrow" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-arrow-left left_arrow" aria-hidden="true"></i>',
    responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
                
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
  ]
});

$('.client_slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});









//dote part js

$(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll > 500) {
        $(".dote").show();
    } else {
        $(".dote").hide();
    }
});



$(document).ready(function () {

    $('.owl-carousel.home_slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        // animateOut: 'zoomOutDown',
        // animateIn: 'zoomIn',
        smartSpeed: 450,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // about_carosel

    $('.owl-carousel.about_slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<img src='assets/image/left-arrow.png'>", "<img src='assets/image/right-arrow.png'>"],
        autoplay: false,
        // animateOut: 'zoomOutDown',
        // animateIn: 'slideInLeft',
        smartSpeed: 1000,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // team_carosel

    $('.owl-carousel.team_slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<img src='assets/image/left-arrow.png'>", "<img src='assets/image/right-arrow.png'>"],
        autoplay: false,
        // animateOut: 'zoomOutDown',
        // animateIn: 'slideInLeft',
        smartSpeed: 1000,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // newsletter_carosel

    $('.owl-carousel.newsletter_slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<img src='assets/image/left-arrow.png'>", "<img src='assets/image/right-arrow.png'>"],
        autoplay: false,
        // animateOut: 'zoomOutDown',
        // animateIn: 'slideInLeft',
        smartSpeed: 1000,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    $(".back_to_top").click(function () {

        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });


    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".top-header-area").addClass("black");
        } else {
            $(".top-header-area").removeClass("black");
        }

    });


    $('.bars_mobile').click(function () {

        $('.overlay_mobile_nav').addClass('animated fadeInLeft faster').show();
    });


    $('.close_btn').click(function () {

        $('.overlay_mobile_nav').removeClass('animated fadeInLeft slow').hide();
    });


    $('.bars_mobile').click(function () {

        $('.single_nav_area li').addClass('animated flipInY slow');
    });


    $('.search_icon').click(function () {

        $('.search_panel_none').addClass('animated zoomIn faster').show();
    });

});

